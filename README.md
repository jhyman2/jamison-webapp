# Welcome to Jamisons WebApp template!

This repo is designed to be the scaffolding for a scalable modern WebApp.

## Technologies:

 - TypeScript
 - React
 - Apollo Server (GraphQL)
 - Apollo Client
 - Node
 - Express
 
# Instructions
1) Create a `.env` file with the following contents and put it in the root of this repository. It will be ignored by git.
```js
APP_NAME=JAMISON-WEBAPP
APOLLO_PORT=4000
EXPRESS_PORT=8080
```
2) Open 1 terminal and run the following
```js
cd packages/server
npm install
npm start
```
3) Open second terminal
```js
cd packages/client
npm install
npm start
```

### Future tools/technologies to add
* Tailwind
* Storybook
* User authentication
* PostGres