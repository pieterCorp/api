const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_discription: {
        type: String,
        required: true
    },    
    product_category: {
        type: String,
        required: false
    },
    product_price: {
        type: Number,
        required: true,        
    },
    product_image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);