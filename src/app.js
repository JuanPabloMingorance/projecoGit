const fs = require('fs');
const process = require('./process');
const articulos = process.argv[2];

const products = fs.readFileSync('./data/data.json','utf-8');


console.log(products);
