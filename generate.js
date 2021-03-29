var esschema = require('esschema')
  , through = require('through2');

module.exports = function(options) {
  options || (options = {});

  var stringify = options.pretty ? 
    function(tree) { return JSON.stringify(tree, null, 2); } :
    JSON.stringify(tree);

  return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    try {
      var tree = String(file.contents)
        , schema = esschema.generate(tree, options.esschema || {});
      file.contents = new Buffer(stringify);
      this.push(file);

    } catch (e) {
      console.warn('Error caught from esschema.generate: ' + e);
      this.push(file);
    }

    return callback();

  });
};
