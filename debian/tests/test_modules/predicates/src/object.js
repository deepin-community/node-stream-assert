'use strict';

/**
 * Checks whether a value is an object
 *
 * **Aliases** _obj_
 *
 * @function object
 *
 * @example
 * var is = require('predicates');
 *
 * is.object({}); // true
 * is.object('object'); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isObject(value) {
    return value instanceof Object || (typeof value === 'object' && value !== null);
};