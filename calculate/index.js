const {x, calculateSum} = require('./sum_folder.js');
const {calculateMultiply} = require('./multiply_folder.js');
// cannot call x from multiplyfolder as we already decleared x from sum_folder

module.exports = { x, calculateSum, calculateMultiply}