const mongoose = require('mongoose');

const ProdcutSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true
    },
    Cost: {
        type: String,
        required: true
    },

    Discription: {
        type: String,
        required: true
        // unique: true
    },
    image: {
        type: String,
        required: true
    }
    
},
    { timestamps: true })

module.exports = mongoose.model('prodcutDetails', ProdcutSchema);