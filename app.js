const fs = require('fs');

const products = fs.readFileSync('./data/data.json','utf-8');

console.log(products);