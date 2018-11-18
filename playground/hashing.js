const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log(token);



/* var message = "I am user number 3";

var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 4
};

var token = {
    data: data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
};

// token.data.id = "5";
//token.hash = SHA256(JSON.stringify(data)).toString();

//Using a Salt to avoid ,manipualtions in token hash
var resutlHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if (resutlHash === token.hash){
    console.log('Data was not changed');
} else {
    console.log('Data was changed. DO NOT trust. ALERT!!!');
}
*/

