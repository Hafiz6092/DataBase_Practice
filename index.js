const{Pool} = require('pg');

const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "dbpractice",
    user: "postgres",
    password: "Home6924",
});

// pool.query('SELECT * FROM cars', (error, result)=>{
//     try{
//         console.log('Query Result ===>', result.rows);
//     }catch(error){
//         console.error();
//     }
// });

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}