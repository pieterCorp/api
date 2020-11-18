if(process.env.NODE_ENV !== 'production'){
    require('dotenv/config');
}
const express = require('express');
const mongoose = require('mongoose');

const app =  express();

app.use(express.static('welcomePage')); 

//connect to MongoDB

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to database"));


//algemene middleware

app.use(express.json());

//USE USER MIDDLEWARE

const userRoute = require('./routes/users');
app.use('/users', userRoute);

//USE PRODUCT MIDDLEWARE

const productRoute = require('./routes/products');
app.use('/products', productRoute);


// HOST WELCOMEPAGE

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
});

// SERVER LISTEN
app.listen(process.env.PORT ||3000, () =>{
    console.log(`server listening at port 3000`)
});
