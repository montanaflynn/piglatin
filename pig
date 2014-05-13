#!/usr/bin/env node
var piglatin = require('./piglatin.js');

var text = "";
process.argv.slice(2).forEach(function (arg) {
  text = text + arg + " ";
});

console.log(piglatin(text));