# aws-config-helpers
1. Clone this repository
1. `npm install` from inside of this directory to download the `aws-sdk`
1. Open `clean-remediations.js` and uncomment line 9. Understand by doing so, you're going to delete things.  
1. Configure your authentication/profile/cli how you need to
1. Run `node clean-remediations.js` to clean up config rules and associated remediations.

## Alternative
If you just have the CLI configured, you can use the commands below:

```
aws cloudformation describe-stack-resource --stack-name YOUR_STACK_NAME \
--logical-resource-id ConfigRule1Remediation \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED \
--query "StackResourceDetail.PhysicalResourceId" | \
xargs -I {} aws configservice delete-remediation-configuration \
--config-rule-name {} \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED

aws cloudformation describe-stack-resource --stack-name YOUR_STACK_NAME \
--logical-resource-id ConfigRule2Remediation \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED \
--query "StackResourceDetail.PhysicalResourceId" | \
xargs -I {} aws configservice delete-remediation-configuration \
--config-rule-name {} \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED

aws cloudformation describe-stack-resource --stack-name YOUR_STACK_NAME \
--logical-resource-id ConfigRule4Remediation \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED \
--query "StackResourceDetail.PhysicalResourceId" | \
xargs -I {} aws configservice delete-remediation-configuration \
--config-rule-name {} \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED

aws cloudformation describe-stack-resource --stack-name YOUR_STACK_NAME \
--logical-resource-id ConfigRule6Remediation \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED \
--query "StackResourceDetail.PhysicalResourceId" | \
xargs -I {} aws configservice delete-remediation-configuration \
--config-rule-name {} \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED

aws cloudformation describe-stack-resource --stack-name YOUR_STACK_NAME \
--logical-resource-id ConfigRule7Remediation \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED \
--query "StackResourceDetail.PhysicalResourceId" | \
xargs -I {} aws configservice delete-remediation-configuration \
--config-rule-name {} \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED

aws cloudformation describe-stack-resource --stack-name YOUR_STACK_NAME \
--logical-resource-id AWSConfigRule1 \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED \
--query "StackResourceDetail.PhysicalResourceId" | \
xargs -I {} aws configservice delete-config-rule \
--config-rule-name {} --profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED

aws cloudformation describe-stack-resource --stack-name YOUR_STACK_NAME \
--logical-resource-id AWSConfigRule2 \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED \
--query "StackResourceDetail.PhysicalResourceId" | \
xargs -I {} aws configservice delete-config-rule \
--config-rule-name {} --profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED

aws cloudformation describe-stack-resource --stack-name YOUR_STACK_NAME \
--logical-resource-id AWSConfigRule3 \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED \
--query "StackResourceDetail.PhysicalResourceId" | \
xargs -I {} aws configservice delete-config-rule \
--config-rule-name {} --profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED

aws cloudformation describe-stack-resource --stack-name YOUR_STACK_NAME \
--logical-resource-id AWSConfigRule4 \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED \
--query "StackResourceDetail.PhysicalResourceId" | \
xargs -I {} aws configservice delete-config-rule \
--config-rule-name {} --profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED

aws cloudformation describe-stack-resource --stack-name YOUR_STACK_NAME \
--logical-resource-id AWSConfigRule5 \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED \
--query "StackResourceDetail.PhysicalResourceId" | \
xargs -I {} aws configservice delete-config-rule \
--config-rule-name {} --profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED

aws cloudformation describe-stack-resource --stack-name YOUR_STACK_NAME \
--logical-resource-id AWSConfigRule6 \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED \
--query "StackResourceDetail.PhysicalResourceId" | \
xargs -I {} aws configservice delete-config-rule \
--config-rule-name {} --profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED

aws cloudformation describe-stack-resource --stack-name YOUR_STACK_NAME \
--logical-resource-id AWSConfigRule7 \
--profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED \
--query "StackResourceDetail.PhysicalResourceId" | \
xargs -I {} aws configservice delete-config-rule \
--config-rule-name {} --profile YOUR_AWS_CLI_PROFILE_IF_REQUIRED

```