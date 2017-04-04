# Web Devs of the Shire website

[![Build Status](https://travis-ci.org/WDOTS/wdots.github.io.svg)](https://travis-ci.org/WDOTS/wdots.github.io)

[https://wdots.github.io/](https://wdots.github.io/)

Contributions to the website are very welcome!

- [Quick start guide](#quick-start-guide) - for those familiar with NodeJS and open source projects
- [Detailed setup guide](docs/detailed-setup-guide.md) - if you're just getting started in open source, or are unfamiliar with NodeJS build tools
- [Contribution guidelines](#contribution-guidelines)

## Quick start guide

You will need:

- [NodeJS](https://nodejs.org) (recommend v6.9 or above)
- [Yarn](https://yarnpkg.com/)

Install dependencies:

```
$ yarn production=false
```

Start the dev server:

```
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000)


## Contribution guidelines

- Use [Yarn](https://yarnpkg.com/) to add or remove any dependencies, and remember to check in changes to the
 `yarn.lock` file
- Before committing, please run `npm run lint` and ensure there are no linting errors or warnings
- Before raising a pull request please test that the website works in the latest version
 of all major browsers (Chrome, Firefox, Safari, Edge)
- Before merging a pull request, wait for the build to pass and request a review from at least one other member of WDOTS
