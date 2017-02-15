# NodeJS-Express-Sample
Boilerplate NodeJS + Express with examples.

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
