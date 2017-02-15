# NodeJS-Express-Sample
Boilerplate NodeJS + Express with examples.

## Why Use NodeJS and Express?
NodeJS is a runtime environment that allows you to run JavaScript code without the web browser. If you've programmed in Java before, you've ran your code in a runtime environment. This concept is no different for NodeJS. With NodeJS, you are able to run JavaScript code on any platfrom so long as the runtime environment is set up for that platform. This allows you to build applications in JavaScript without needing a web browser to run the code.

Express is a NodeJS module that allows you to run a web (HTTP) server. A web server is a server that accepts GET requests and responds
to that request (usually to serve a web page or data).

With NodeJS and Express, you can create web applications using JavaScript and web technologies.

## Getting Started
### From Scratch
Requirements:
* NodeJs
* Express
* Express-Generator (for quick scaffolding): `npm install -g express-generator`
* nodemon: `npm install -g nodemon`

(Note that express-generator is installed globally. This means that it can be used directly from the command line. Reserve the global tag for command-line tools, not packages.)

To start the scaffolding project:
`express $APP-NAME`

To use Hogan templating and less, use:
`express $APP_NAME --hogan -c less`

This will scaffold your project. Install project dependencies by:
`cd $APP-NAME && npm install` <br />
(The scaffolding creates the package.json dependency file for you.)

Start the express service with:
`nodemon bin/www` <br />
(Note that nodemon allows you to make changes to the code without having to restart the express server each time to update changes.)

### From Repo
Requirements:
* NodeJS
* Express
* nodemon: `npm install -g nodemon`
(Note that express-generator is installed globally. This means that it can be used directly from the command line. Reserve the global tag for command-line tools, not packages.)

Clone the repository: `git clone https://github.com/elopezga/NodeJS-Express-Sample.git`

Install NodeJS dependancies: `cd NodeJS-Express-Sample && npm install`
