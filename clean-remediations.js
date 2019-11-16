const AWS = require('aws-sdk');
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html
const credentials = new AWS.SharedIniFileCredentials({profile: 'collinsandbox'});
AWS.config.credentials = credentials;
const configService = new AWS.ConfigService({ region: 'eu-central-1' });

// Because this is destructive, please uncomment the line below, save, and re-run to make sure you want to 
// DESTROY ALL OF YOUR CONFIG REMEDIATIONS AND RULES.
// cleanUpConfig();

async function cleanUpConfig() {
  const rulesResponse = await describeConfigRules();
  console.log(`${rulesResponse.ConfigRules.length} rule(s) returned.`);
  await Promise.all(rulesResponse.ConfigRules.map(async function del(r) {
    return await deleteRemediationConfiguration(r.ConfigRuleName);
  }));

  await Promise.all(rulesResponse.ConfigRules.map(async function del(r) {
    return await deleteConfigRule(r.ConfigRuleName);
  }));
  console.log('Complete.');
}

async function deleteRemediationConfiguration(ConfigRuleName) {
  try {
    return await configService.deleteRemediationConfiguration({
      ConfigRuleName
    }).promise();
  } catch(e) {
    if(e.code !== 'NoSuchRemediationConfigurationException') throw e;
    console.log(`Skipping - ${ConfigRuleName} doesn't have a remediation configured to delete.`);
  }
}

async function deleteConfigRule(ConfigRuleName) {
  console.log(`Deleting - ${ConfigRuleName}`);
  return await configService.deleteConfigRule({
    ConfigRuleName
  }).promise();
}

async function describeConfigRules(ConfigRuleNames = []) {
  return await configService.describeConfigRules({ ConfigRuleNames }).promise();
}