const fs = require('fs');
const path = require('path');

const env = process.env['ENV'];
console.log(`current env: ${env}`);

// # copy .env
fs.cpSync(
  path.join(__dirname, `../environments/${env}.env`),
  path.join(__dirname, '../.env'),
);
