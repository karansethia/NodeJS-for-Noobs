const path = require('path');

//? Getting the root directory of the file that is running on the server
module.exports = path.dirname(process.mainModule.filename);