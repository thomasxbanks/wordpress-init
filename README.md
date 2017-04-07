# WordPress Installation Boilerplate

## Installation

## Dependencies
- [Node.js](https://nodejs.org/en/)
- [wp-cli](http://wp-cli.org/), To install, run the `npm run init` command.

## Prerequisite steps
- Define database name in `mysql.js`
- Define database name in `package.json`
- Define theme name in `package.json`
- Define site URI in `package.json`
- Define projectname in `package.json`
- You may get this error if you've been using MAMP: `mysql: command not found`. [Fix it](https://ilikekillnerds.com/2014/08/solving-sh-mysql-command-not-found-in-mamp-pro-2-and-mamp-pro-3/) before you run the process

### Steps of the process (checked are automated)
- [x] Get latest WordPress
- [x] Get latest Boilerplate Theme
- [x] Create `localhost` MySQL database
- [ ] Create local server
- [x] Configure WordPress
- [x] Install WordPress
- [x] Create a new repo for the new project
- [ ] Destroy the build tool! _(Currently not doing this until it's hosted somewhere)_

### Next steps
1. Can `node.js` offer prompts to create variables like `projectname`, etc?
1. Can BitBucket create repo for team instead of user? - _Using api v2.0, yes - **investigate**_
