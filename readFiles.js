'use strict';

const fs = require('fs');

fs.readdir('./', (err, items) => {
  console.log('items',items);
});
