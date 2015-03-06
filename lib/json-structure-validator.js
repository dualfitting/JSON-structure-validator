var _ = require('lodash');

var compareJSON = function(parent, compared) {
  var keys = _.keys(parent);

  return _.all(keys, function(key){
    if(_.has(compared, key)){
      return compareJSON(parent[key], compared[key]);
    }
    else {
      return false;
    }
  });
};

var comparison = function(parent, compared) {
  return compareJSON(parent, compared);
};


module.exports = comparison;
