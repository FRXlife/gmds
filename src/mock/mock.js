var list = require('./list.json')
var carthot=require('./cart.json')
module.exports = function() {
  return {
    'list.php': list,
    'cart.php':carthot
  }
}
