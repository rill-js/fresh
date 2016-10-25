'use strict'

var fresh = require('fresh')

/**
 * Expose `fresh`.
 */
module.exports = freshSetup

/**
 * Check for fresh headers such as ETag.
 * @param {object} [options] see https://github.com/jshttp/fresh#options
 * @return {Function}
 * @api public
 */
function freshSetup (options) {
  return function freshMiddleware (ctx, next) {
    return next().then(function () {
      // Check for empty body.
      var body = ctx.res.body
      if (!body) return

      // GET or HEAD for weak freshness validation only
      var method = ctx.req.method
      if (method !== 'GET' && method !== 'HEAD') return

      // 2xx, 404 status
      var status = ctx.res.status
      if (status !== 404 && status / 100 | 0 !== 2) return

      // Check for freshness.
      if (fresh(ctx.req.headers, ctx.res.headers)) {
        ctx.res.status = 304
        ctx.res.body = null
        ctx.res.remove('Content-Type')
        ctx.res.remove('Content-Length')
      }
    })
  }
}
