'use strict';

/**
 * Module dependencies.
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lruCache = require('lru-cache');

var _lruCache2 = _interopRequireDefault(_lruCache);

/**
 * Module constants.
 */

var noop = function noop() {};

var MemoryStore = (function () {

  /**
   * MemoryStore constructor.
   *
   * @param {Object} options
   * @api public
   */

  function MemoryStore() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, MemoryStore);

    this.client = (0, _lruCache2['default'])(options.count || 100);
  }

  /**
   * Get an entry.
   *
   * @param {String} key
   * @param {Function} fn
   * @api public
   */

  _createClass(MemoryStore, [{
    key: 'get',
    value: function get(key) {
      var fn = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];

      var val = undefined,
          data = this.client.get(key);
      if (!data) return fn(null, data);
      if (data.expire < Date.now()) {
        this.client.del(key);
        return setImmediate(fn);
      }
      try {
        val = JSON.parse(data.value);
      } catch (e) {
        return setImmediate(fn.bind(null, e));
      }

      setImmediate(fn.bind(null, null, val));
    }

    /**
     * Set an entry.
     *
     * @param {String} key
     * @param {Mixed} val
     * @param {Number} ttl
     * @param {Function} fn
     * @api public
     */

  }, {
    key: 'set',
    value: function set(key, val, ttl) {
      var fn = arguments.length <= 3 || arguments[3] === undefined ? noop : arguments[3];

      var data = undefined;
      if ('function' === typeof ttl) {
        fn = ttl;
        ttl = null;
      }

      if ('undefined' === typeof val) return fn();

      try {
        data = {
          value: JSON.stringify(val),
          expire: Date.now() + (ttl || 60) * 1000
        };
      } catch (e) {
        return setImmediate(fn.bind(null, e));
      }

      this.client.set(key, data);

      setImmediate(fn.bind(null, null, val));
    }

    /**
     * Delete an entry.
     *
     * @param {String} key
     * @param {Function} fn
     * @api public
     */

  }, {
    key: 'del',
    value: function del(key) {
      var fn = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];

      this.set(key, null, -1, fn);
    }

    /**
     * Clear all entries for this bucket.
     *
     * @param {Function} fn
     * @api public
     */

  }, {
    key: 'clear',
    value: function clear() {
      var fn = arguments.length <= 0 || arguments[0] === undefined ? noop : arguments[0];

      this.client.reset();
      setImmediate(fn);
    }
  }]);

  return MemoryStore;
})();

exports['default'] = MemoryStore;
module.exports = exports['default'];