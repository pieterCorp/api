const express = require('express');

const app =  express();

app.get('/', (req, res) => {
    res.send('indexpage')
});

// SERVER LISTENING
app.listen(3000, () =>{
    console.log(`server listening at port 3000`)
});