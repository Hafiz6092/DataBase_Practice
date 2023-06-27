const express = require('express');

const db = require('./index.js');

const PORT = 8080;

const app = express();


app.get('/customers', async (req, res) => {
    const text = 'SELECT * from customers'
    //res.send(text);
    console.log('Customers reached');
    //pool.query('SELECT * FROM cars', (error, result)=>{
    try{
        const result = await db.query(text);
        console.log('Query Result ===>', result.rows);
        res.send(result.rows);
        //res.status(200).json({'Status': success, 'Result': result.rows.length, 'Data': result.rows});
    }catch(error){
        console.error();
    }
})

app.get('/cars', async (req, res) => {
    const text = 'SELECT * from cars'
    //res.send(text);
    console.log('Cars Table reached');
    //pool.query('SELECT * FROM cars', (error, result)=>{
    try{
        const result = await db.query(text);
        console.log('Query Result ===>', result.rows);
        res.send(result.rows);
        //res.status(200).json({'Status': success, 'Result': result.rows.length, 'Data': result.rows});
    }catch(error){
        console.error();
    }
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
    
});

