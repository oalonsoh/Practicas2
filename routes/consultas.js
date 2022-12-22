import Router from 'express';
import {conn} from "./connection.js";

const consulta = new Router();

// Vistas de consultas




// Consulta datos personales
consulta.get("/", (req, res) => {
    const sql = "select * from cv_contacto"
    conn.query(sql, (error, results) => {
        if (error){
            throw error
            
        } else {  
            res.json();
            console.log('consulta realizada');
        }
    });

});

consulta.post("/insertTecnointeres", (req, res) => {
    let sql = "select insertTecnologia(?) as cod";
    if (!req.body.istecno){
         sql = "select insertintereses(?) as cod"; 
    }
    conn.query(sql,[req.body.name], (error, results) => {
        if (error){
            throw error
            
        } else {  
           res.json(results);
        }
    });
 
});

consulta.post("/listTecnointeres", (req, res) => {
    let sql = "select * from cv_tech";
    if (!req.body.istecno){
        sql = "select * from cv_hobbies";
    }
    conn.query(sql, (error, results) => {
        if (error){
            throw error
            
        } else {  
           // res.json(results);
         console.log(results)
        }
    });
});

export default consulta ;



// consulta.get("/dpersonales", (req, res) => {
//     Query
    
//     res.json();
// });