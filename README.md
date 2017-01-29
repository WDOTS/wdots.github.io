# Web Devs of the Shire website

[![Build Status](https://travis-ci.org/WDOTS/wdots.github.io.svg)](https://travis-ci.org/WDOTS/wdots.github.io)

[http://wdots.github.io/](http://wdots.github.io/)

## Contribute

Contributions to the website are very welcome!

You will need:

- [NodeJS](https://nodejs.org) (recommend v6.9 or above)
- [Yarn](https://yarnpkg.com/)

Clone the repo:

```
$ git clone git@github.com:WDOTS/wdots.github.io.git
```

Create a new feature branch:

```
$ git checkout -b my-new-feature
```

Install dependencies:

```
$ yarn install
```

Start the dev server:

```
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000) and implement your changes!

### Production mode

You can also start the dev server in production mode. This runs an HTTPS server, and uses vendor assets served from 
CDNs, rather than local assets.

```
$ NODE_ENV=production npm start
```

### Push

After you've made changes and committed them into Git, push your branch to Github:

```
$ git push origin my-new-feature
```

Then go to [our Github repo](https://github.com/WDOTS/wdots.github.io) and create a pull request against the
`integration` branch.

## Guidelines

- Use [Yarn](https://yarnpkg.com/) to add or remove any dependencies, and remember to check in changes to the 
 `yarn.lock` file
- Before committing, please run `npm run lint` and ensure there are no linting errors or warnings
- Before raising a pull request please test that the website works in the latest version
 of all major browsers (Chrome, Firefox, Safari, Edge)
- Before merging a pull request, wait for the build to pass and request a review from at least one other member of WDOTS
