# Lambda Serverless Template

This is a template for a project that uses the Serverless Framework to implement Lambda Functions. You will most likely form a REST API with some Lambda Functions and an API Gateway in front of them.


## Prerequisites

* You have made you AWS access and secret key available through a provided method, like storing them in the ~/.aws/credentials file or export them into environment variables
* You need to install Node.js  with a minimum version of 6.5.0 
* Then you need to install the serverless CLI with `sudo npm install -g serverless`


## Create new Function

* `serverless create function -f functionName --handler handler --path tests/unit`, e.g. `serverless create function -f hello --handler src/hello.handler --path tests/unit` which creates a new handler file as well a respecive test file and an entry in the serverless.yml


## Tests

* Run unit/integration tests with `gulp test` or `npm test`
* A test file for unit tests gets created if you create a new function
* Files for integration tests have to be added manually
* End to End tests are defined in test/end-to-end/acceptance.js. Running them assumes that the whole application is deployed on AWS and the base url of the API Gateway is set for the GATEWAY_BASE_URL environment variable.
* Run end to end test with `TEST_FILE=acceptance npm test`

## Deploy

* `serverless deploy -v`


## Run Locally

* You can run the your Lambda Functions locally by using `serverless offline start`


## Invoke Function

* `serverless invoke -f <function-name> -l`


## Known Issues
* Must use gulp-mocha 3.0.1 for code coverage to show properly. There is an open discussion about that issue: https://github.com/sindresorhus/gulp-mocha/issues/159


## Further Input

* https://github.com/vandium-io/lambda-tester
* https://github.com/SC5/serverless-mocha-plugin
