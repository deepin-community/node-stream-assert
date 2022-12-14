/*eslint eqeqeq: 0*/
'use strict';

var isArrayLike = require('./arrayLike'),
    isObject = require('./object'),
    isString = require('./string');

/**
 * Checks whether a value is empty
 * Value is empty when:
 * * is an array like object with length === 0
 * * is an object without enumerable properties
 * * is an empty string
 *
 * @function empty
 *
 * @example
 * var is = require('predicates');
 *
 * is.empty(''); // true
 * is.empty([]); // true
 * is.empty({}); // true
 * is.empty([1]); // false
 * is.empty('test'); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = function isEmpty(value) {
    if (isArrayLike(value)) {
        return value.length === 0;
    } else if (isObject(value)) {
        return Object.keys(value).length === 0;
    } else if (isString(value)) {
        return value == '';
    }
    return false;
};
