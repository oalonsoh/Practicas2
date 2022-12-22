import Router from 'express';
import {conn} from "./connection.js";

const consulta = new Router();

// VISTAS DE CONSULTAS

// CONSULTAS GLOBALES

// Consulta datos personales
consulta.get("/cv_contacto", (req, res) => {
    const sql = "select * from cv_contacto"
    conn.query(sql, (error, results) => {
        if (error){
            throw error
            
        } else {  
            res.json(results);
            // console.log('consulta realizada');
        }
    });

});

// Consulta experiencias
consulta.get("/cv_experiencias", (req, res) => {
    const sql = "select * from cv_experiencias"
    conn.query(sql, (error, results) => {
        if (error){
            throw error
            
        } else {  
            res.json(results);
            // console.log('consulta realizada');
        }
    });

});

// Consulta formación
consulta.get("/cv_hardskills", (req, res) => {
    const sql = "select * from cv_hardskills"
    conn.query(sql, (error, results) => {
        if (error){
            throw error
            
        } else {  
            res.json(results);
            // console.log('consulta realizada');
        }
    });

});

//CONSULTAS POR USUARIO

// Consulta datos personales por usuario
consulta.get("/cv_contacto/:id", (req, res) => {
    const id = req.params.id;
    const sql = "select * from cv_contacto where iduser = ?";
    conn.query(sql, [id], (error, results) => {
      if (error) {
        res.status(500).json("Error de servidor");
        throw error;
      }
      res.json(results)
    });
});

// Consulta datos personales por usuario
consulta.get("/cv_experiencias/:id", (req, res) => {
    const id = req.params.id;
    const sql = "select * from cv_experiencias where iduser = ?";
    conn.query(sql, [id], (error, results) => {
      if (error) {
        res.status(500).json("Error de servidor");
        throw error;
      }
      res.json(results)
    });
});

// Consulta datos personales por usuario
consulta.get("/cv_hardskills/:id", (req, res) => {
    const id = req.params.id;
    const sql = "select * from cv_hardskills where iduser = ?";
    conn.query(sql, [id], (error, results) => {
      if (error) {
        res.status(500).json("Error de servidor");
        throw error;
      }
      res.json(results)
    });
});



export default consulta ;

