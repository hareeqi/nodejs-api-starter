## Purpose 
This repository allows you to rapidly develop REST API with an opinionated approach and an extremely short feedback loop that empowers a test driven methodology. It has testing and coverage built in.

## Installation
```
git clone https://github.com/hareeqi/nodejs-api-starter.git
cd nodejs-api-starter
npm i
```


## Usage 
To start developing and adding an API end points

1. Run the command `npm run test` This will make sure your tests always run on any file changes
2. Start writing a test case for a new route in the test folder, Upon saving you will notice the tests re-run and 404 not found appeared.
3. Add your new function in the models folder and then add a new route in the routes folder. 
4. if you want your front-end to connect to the API for development purposes, run the command `npm run dev`. It will restart the API server on each server file change.
5. To pass configuration the server. Add `.env` and pass all the corresponding environment variables. Also look at `./config/index.js`   




## IDE & Extensions 
1. Use VSCode 
2. Prettier plugin configured with auto save
3. ESLint plugin
4. DotEnv plugin
5. ES6 Mocha Snippets


## Tips 
* You might need to turn off your firewall to have a  real device connecting to your api
* Color Highlight plugin 
* Select highlight minimap plguin