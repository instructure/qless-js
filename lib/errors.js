'use strict';

const util = require('util');

const ExtendableError = require('es6-error');

/**
 * The top-level class for all of our errors.
 */
function QlessError(message, cause) {
  ExtendableError.call(this, message);
  if (cause) {
    this.cause = cause;
    if (cause.stack) {
      this.stack = `${this.stack}\nCaused by: ${cause.stack}`;
    }
  }
}

util.inherits(QlessError, ExtendableError);

module.exports = {
  QlessError,
};
