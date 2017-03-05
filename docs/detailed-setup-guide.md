# Detailed setup guide

This guide is intended for people who are new to open source development and NodeJS build tools. If anything is 
still unclear, ask a question in our [Slack org](https://webdevsoftheshire.slack.com)

## Set up your computer

Before you do anything else, make sure you have the following installed on your computer

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com/)

### NodeJS

NodeJS powers our build tools and development environment. Download and install the latest version from
[nodejs.org](https://nodejs.org/en/)

**Optional:** If you are going to help maintain a number of different NodeJS projects, we recommend installing
[Node Version Manager (nvm)](https://github.com/creationix/nvm). This allows you to easily switch between different versions of NodeJS.

### Yarn

Yarn is a dependency manager, which allows you to install the many third party libraries used in our project. 
Take a look at the [installation instructions](https://yarnpkg.com/en/docs/install) for your Operating System.

## Set up the project

Now your computer is ready, you can pull down the project and get it up and running.

Clone the repo:

```
$ git clone git@github.com:WDOTS/wdots.github.io.git
```

Navigate to the correct directory:

```
$ cd wdots.github.io
```

Install third party dependencies using Yarn:

```
$ yarn install
```

Start the dev server:

```
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). You should see the lovely WDOTS homepage!

### Production mode

You can also start the dev server in production mode. This runs an HTTPS server, and uses vendor assets served from 
CDNs, rather than local assets.

```
$ NODE_ENV=production npm start
```

## Contributing to wdots.github.io

The default branch for this project is called `integration`. Most projects use `master` as the default,
 but we're a little different as we use `master` to host our built assets.

If you want to contribute a feature, fix a bug or make some other change, first create a new feature 
branch based on `integration`. Make sure you have all the lastest changes so you are up to date:

```
$ git pull origin integration
$ git checkout -b my-new-feature
```

After you've made changes and committed them into Git, push your branch to Github:

```
$ git push origin my-new-feature
```

Then go to [our Github repo](https://github.com/WDOTS/wdots.github.io) and create a pull request against the
`integration` branch.

```
$ git push origin my-new-feature
```

Then go to [our Github repo](https://github.com/WDOTS/wdots.github.io) and create a pull request against the
`integration` branch.
