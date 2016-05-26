# Impersonation with Auth0

This sample provides an example to do impersonation with Auth0

## Configuration

Make sure to get the 

* `user_id` of the person you want to impersonate
* `user_id` of the person performing the impersonation
* `email` of the person performing the impersonation
* `GLOBAL_CLIENT_ID` from Auth0 dashboard under Accounts -> Advanced
* `GLOBAL_CLIENT_SECRET` from Auth0 dashboard under Accounts -> Advanced
* `AUTH0_CLIENT_ID` the auth0 application id

## Installation

You need npm, nodejs installed.

```
$ cd /path/to/directory
$ npm install
# node index.js
```

What you will need?
* Create a .env file in the project root directory.
* Add the following lines to this file
```
AUTH0_DOMAIN=myDomain
AUTH0_GLOBAL_CLIENT_ID=myGlobalClientId
AUTH0_GLOBAL_CLIENT_SECRET=myGlobalClientSecret
```
This global client id and secret is available on https://auth0.com/docs/api/v2 if you click on "API Key/Secret" near the token generator.

Import and use the library
```
var dotenv = require('dotenv');
var helpers = require('auth0-app-rule-mapping').Auth0Helpers;
dotenv.load();
helpers.appToRulesMapping(function (mapping) {
    // do something.
});
```
