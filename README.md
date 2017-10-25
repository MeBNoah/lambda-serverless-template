# Lambda Serverless Template

This is a template for a project that uses the Serverless Framework to implement Lambda Functions.


## Prerequisites

* You have made you AWS access and secret key available through a provided method, like storing them in the ~/.aws/credentials file or export them into environment variables
* You need to install Node.js  with a minimum version of 6.5.0 
* Then you need to install the serverless CLI with `sudo npm install -g serverless`


## Create new Function

* `sls create function -f functionName --handler handler`, e.g. `sls create function -f hello --handler src/hello.handler` which creates a new handler file as well a respecive test file and an entry in the serverless.yml


## Tests

* Run tests with `gulp test` or `npm test`


## Deploy

* `serverless deploy -v`


## Invoke Function

* `serverless invoke -f <function-name> -l`


## Known Issues
* Must use gulp-mocha 3.0.1 for code coverage to show properly. There is an open discussion about that issue: https://github.com/sindresorhus/gulp-mocha/issues/159


## Further Input

* https://github.com/vandium-io/lambda-tester
* https://github.com/SC5/serverless-mocha-plugin
