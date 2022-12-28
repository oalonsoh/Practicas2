import Router from 'express';
import { conn } from "./connection.js";

const consulta = new Router();

// VISTAS DE CONSULTAS

// CONSULTAS GLOBALES

// Consulta datos personales
consulta.get("/cv_contacto", (req, res) => {
    const sql = "select * from cv_contacto"
    conn.query(sql, (error, results) => {
        if (error) {
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
        if (error) {
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
        if (error) {
            throw error

        } else {
            res.json(results);
            // console.log('consulta realizada');
        }
    });

});

// Consulta intereses
consulta.get("/cv_hobbies", (req, res) => {
    const sql = "select * from cv_hobbies"
    conn.query(sql, (error, results) => {
        if (error) {
            throw error

        } else {
            res.json(results);
            // console.log('consulta realizada');
        }
    });

});

// Consulta idiomas
consulta.get("/cv_idiomas", (req, res) => {
    const sql = "select * from cv_idiomas"
    conn.query(sql, (error, results) => {
        if (error) {
            throw error

        } else {
            res.json(results);
            // console.log('consulta realizada');
        }
    });

});

// Consulta objetivos
consulta.get("/cv_objetivos", (req, res) => {
    const sql = "select * from cv_objetivos"
    conn.query(sql, (error, results) => {
        if (error) {
            throw error

        } else {
            res.json(results);
            // console.log('consulta realizada');
        }
    });

});

// Consulta talentos
consulta.get("/cv_softskills", (req, res) => {
    const sql = "select * from cv_softskills"
    conn.query(sql, (error, results) => {
        if (error) {
            throw error

        } else {
            res.json(results);
            // console.log('consulta realizada');
        }
    });

});

// Consulta tecnologías
consulta.get("/cv_techs", (req, res) => {
    const sql = "select * from cv_techs"
    conn.query(sql, (error, results) => {
        if (error) {
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

// Consulta experiencias por usuario
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

// Consulta formaciones por usuario
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

// Consulta intereses por usuario
consulta.get("/cv_hobbies/:id", (req, res) => {
    const id = req.params.id;
    const sql = "select * from cv_hobbies where iduser = ?";
    conn.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).json("Error de servidor");
            throw error;
        }
        res.json(results)
    });
});

// Consulta idiomas por usuario
consulta.get("/cv_idiomas/:id", (req, res) => {
    const id = req.params.id;
    const sql = "select * from cv_idiomas where iduser = ?";
    conn.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).json("Error de servidor");
            throw error;
        }
        res.json(results)
    });
});

// Consulta objetivos por usuario
consulta.get("/cv_objetivos/:id", (req, res) => {
    const id = req.params.id;
    const sql = "select * from cv_objetivos where iduser = ?";
    conn.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).json("Error de servidor");
            throw error;
        }
        res.json(results)
    });
});

// Consulta talentos por usuario
consulta.get("/cv_softkills/:id", (req, res) => {
    const id = req.params.id;
    const sql = "select * from cv_softskills where iduser = ?";
    conn.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).json("Error de servidor");
            throw error;
        }
        res.json(results)
    });
});

// Consulta tecnologías por usuario
consulta.get("/cv_techs/:id", (req, res) => {
    const id = req.params.id;
    const sql = "select * from cv_techs where iduser = ?";
    conn.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).json("Error de servidor");
            throw error;
        }
        res.json(results)
    });
});

consulta.get("/prova/:id", (req, res) => {
    const id = req.params.id;
    const sql = "select * from cv_contacto where iduser = ?";
    conn.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).json("Error de servidor");
            throw error;
        };
        res.json(results);
        //localStorage.setItem("cosa", JSON.stringify(results));


        // console.log(results);
        // res.render({datos: results[0]});
    });


});





export default consulta;

