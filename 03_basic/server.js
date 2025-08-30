const express = require('express');
const app = express();

app.use(express.json());

app.use((req , res, next)=>{
    console.log('hello backend');
})

app.get('/' ,(req, res)=>{
    res.send('hello');
})

app.listen(3000)