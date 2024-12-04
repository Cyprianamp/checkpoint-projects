const fs = require('fs');

fs.writeFileSync('welcome.txt', 'Hello Node');
console.log('File "welcome.txt" created.');


const fs = require('fs');

const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data); // Outputs: Hello Node
