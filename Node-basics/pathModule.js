// Path Module : this module is vaery useful for creating paths and manipulating them

const path = require("path");

console.log(path.sep) // logs : /

const filePath = path.join("/context","subfolder","test.txt");
console.log(filePath) // logs : /context/subfolder/test.txt

const fileName = path.basename(filePath);
console.log(fileName) // logs : test.txt

const completePath = path.resolve(__dirname,"context","subfolder","test.txt");
console.log(completePath) // logs : C:\Users\Mrityunjay.mishra\Desktop\mkm\nodejs\NodeJS\Node-basics\context\subfolder\test.txt