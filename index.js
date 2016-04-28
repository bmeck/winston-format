var formatRegExp = /%[sdj%]/g;

exports.indexOfMeta = function (args, guess) {
  if (args.length < 2) {
    return -1;
  }
  var meta_index = typeof guess !== 'undefined' ? guess : args.length - 1;
  var metaType  = Object.prototype.toString.call(args[meta_index]);
  var fmtMatch  = args[0] && args[0].match && args[0].match(formatRegExp);
  var isFormat  = fmtMatch && fmtMatch.length;
  var validMeta = !isFormat
    ? metaType === '[object Object]' || metaType === '[object Error]' || metaType === '[object Array]'
    : metaType === '[object Object]';
    
  return validMeta ? meta_index : -1;
}
