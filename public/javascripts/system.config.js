/**
 * Created by rytis on 2015-03-18.
 */
  // Identical to writing System.baseURL = ...

var systemLocate = System.locate;
System.locate = function(load) {
  var System = this; // its good to ensure exact instance-binding
  return Promise.resolve(systemLocate.call(this, load)).then(function(address) {
    return address + System.cacheBust;
  });
}
System.cacheBust = '?bust=' + Date.now();


System.config({

  // set all requires to "lib" for library code
  baseURL: '/',

  // set "app" as an exception for our application code
  paths: {
    /* 'babel':'/javascripts/lib/browser.js', */
    '*': '/*',
    'app/*': '/javascripts/*.js'
  },
  map: {
    jquery: 'bower_components/jquery/dist/jquery.js',
    lodash: 'bower_components/lodash/lodash.min.js'
  }
});

System.transpiler = 'babel';

System.import('app/Main').then(function (Main) {
  new Main();
});

