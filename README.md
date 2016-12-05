# Node Token JWT

## Dependencies
+ Node
+ NPM
+ Nodemon

## Setup
`$ npm install`

## Run
`$ npm start`

## Authentication

You need to do a POST HTTP Request to `localhost:3000/authenticate`. You will recive a token,so store it somehow. Then ever time that you make a request for `localhost:3000/api/*` you will need to pass the token as `body parameter` or `query string` or `x-access-token` in HTTP header.