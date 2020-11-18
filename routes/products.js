const express = require('express');

const router = express.Router();

//ProductsRoute

router.get('/', (req, res) => {
    res.send("this is the product test page")
});

module.exports = router;