<h1 align="center">
  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Icon.jpg" alt="Rill"/>
  <br/>
  @rill/fresh
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/@rill/fresh">
    <img src="https://img.shields.io/npm/v/@rill/fresh.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/@rill/fresh">
    <img src="https://img.shields.io/npm/dm/@rill/fresh.svg?style=flat-square" alt="Downloads"/>
  </a>
  <!-- Gitter Chat -->
  <a href="https://gitter.im/rill-js/rill">
    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>
  </a>
</h1>

<div align="center">
  Check if a response is fresh and automatically send a 304 (not modified) status.
</div>

## Installation

```console
npm install @rill/fresh
```

## Example

```js
var fresh = require('@rill/fresh')
var etag = require('@rill/etag')
var rill = require('rill')
var app = rill()

// use it upstream from etag so
// that they are present

app.use(fresh())

// add etags

app.use(etag())

// respond

app.use(function ({ res }, next){
  res.body = {
    name: 'tobi',
    species: 'ferret',
    age: 2
  }
})

```

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
