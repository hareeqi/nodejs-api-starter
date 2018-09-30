require('dotenv').config();

console.log(`================================================`);
console.log(`================   ${new Date().toLocaleTimeString()}   ================`);
console.log(`================================================`);

require('./user.test');
require('./product.test');
