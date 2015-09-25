
//Looking for global [logger_level] variable
var config = require('../modules/config');
if (typeof config.logger_level === 'undefined') {
  config.logger_level = 3;
}
/*
Level 0 = Nothing
Level 1 = error
Level 2 = error, success
Level 3 = error, success, warning
Level 4 = error, success, warning, info
Level 5 = error, success, warning, info, debug
*/

module.exports = {

  //Pipe is the recommended way to print out logs, because you can handle them by [logger_level].
  pipe: function(text, type) {
    if(typeof type === 'undefined' && config.logger_level > 0)
      this.log(text);
    if(type == 'error' && config.logger_level > 0)
      this.log('[ERROR] ' + text);
    if(type == 'success' && config.logger_level > 1)
      this.log('[SUCCESS] ' + text);
    if(type == 'warning' && config.logger_level > 2)
      this.log('<Warning> ' + text);

    if(type == 'info' && config.logger_level > 3)
      this.log('<Info> ' + text);
    if(type == 'debug' && config.logger_level > 4)
      this.log('-Debug state- ' + text);
  },

  //Something like the raw method for printing out logs. Used by [pipe], too.
  log: function(log) {
    console.log(log);
  }

};
