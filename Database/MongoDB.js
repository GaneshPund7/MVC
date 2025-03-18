const mongoose = require('mongoose');

async function ConnectToDataBase(url) {
    return mongoose.connect(url); 
}
module.exports =  { ConnectToDataBase };