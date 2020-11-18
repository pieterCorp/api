const express = require('express');

const app =  express();

app.get('/', (req, res) => {
    res.send('Hallo allemaal')
});

// SERVER LISTENING tjfjkhfksl
app.listen(3000, () =>{
    console.log(`server listening at port 3000`)
});
