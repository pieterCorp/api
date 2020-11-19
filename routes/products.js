const express = require('express');
const Product = require('../models/product_model');
const router = express.Router();


//GET ALL PRODUCTS

router.get('/', async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);

    } catch (err) {
        res.status(500).json({ message : err.message});
    }      
});

//GET  ONE PRODUCT

router.get('/:id', getProduct, (req, res) => {
    res.json(res.product);    
});

//CREATE PRODUCT

router.post('/', async (req, res) => {
    const product = new Product({
        product_name: req.body.product_name,
        product_discription: req.body.product_discription,
        product_price: req.body.product_price,
        product_image: req.body.product_image
    });

    try{
    const newProduct = await product.save();
    res.status(201).json(newProduct);
    } catch (err) {
    res.status(400).json({ message: err.message });
    }        
});

//UPDATE Product

router.patch('/:id', getProduct, async (req, res) => {
    if(req.body.product_name != null){
        res.product.product_name = req.body.product_name;
    }
    if(req.body.product_discription != null){
        res.product.product_discription = req.body.product_discription;
    }
    if(req.body.product_price != null){
        res.product.product_price = req.body.product_price;
    }
    if(req.body.product_image != null){
        res.product.product_image = req.body.product_image;
    }
    try{
        const updatedProduct = await res.product.save();
        res.status(200).json(updatedProduct);

    } catch (err){
        res.status(400).json({ message: err.message});
    }
      
});

//DELETE PRODUCT

router.delete('/:id', getProduct, async (req, res) => {
    try{
        await res.product.remove();
        res.status(200).json({ message: 'Product has been removed'});
    } catch (err){
        res.status(500).json({ message: err.message });
    }
     
});

//GET PRODUCT MIDDLEWARE

async function getProduct(req, res, next) {
    let product;
    try{
        product =  await Product.findById(req.params.id)
        if (product == null) {
            return res.status(404).json({ message: 'Cannot find product' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.product = product;
    next();
}

module.exports = router;