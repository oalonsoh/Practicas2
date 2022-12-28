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

consulta.post("/insertTecnoInteres", (req, res) => {
    let sql = "select insertTecnologia(?) as cod";
    if (!req.body.isTecno){
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
    let sql = "select * from cv_tech as cod";
    if (!req.body.istecno){
        sql = "select * from cv_hobbies as cod";
    }
    conn.query(sql, (error, results) => {
        if (error){
            throw error
            
        } else {  
           res.json(results);
        }
    });
});

export default consulta ;



// consulta.get("/dpersonales", (req, res) => {
//     Query
    
//     res.json();
// });