/**
 * Created by rytis on 2015-03-18.
 */
var StringUtil = require('app/StringUtil');
var Experiment = require('app/Experiment');
var Es6Class  = require('app/Es6Class');

module.exports = (function() {

  function Main() {
    // new Es6Class();
    console.log(Es6Class);
    debugger;
    /*
    var util = new StringUtil();
    util.hello;
    util.hello();
    "hey".something();
    "ho".triedSomething();
    ImGlobal();
    */
  }

  Main.prototype = {};

  return Main;

})();

