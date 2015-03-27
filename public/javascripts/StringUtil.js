/**
 * Created by rytis on 2015-03-18.
 */
var _ = require('lodash');
var Experiment = require('app/Experiment');

module.exports = (function() {

  function StringUtil() {

  }

  StringUtil.prototype = {
    hello: function () {
      console.log('hello');
      _.each([1,2,3,4,5], function (item) { console.log(item) });
    }
  };

  String.prototype.something = function () {
    console.log('String.something');
  };

  return StringUtil;

})();
