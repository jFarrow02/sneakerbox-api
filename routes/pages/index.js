const path = require('path');
const acctRouter = require(path.resolve(__dirname, 'account', 'account.js'));

module.exports = {
    acct: acctRouter,
    
};