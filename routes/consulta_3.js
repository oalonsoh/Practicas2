import Router from 'express';
import { conn } from "./connection.js";

const router = new Router();


router.post("/insertCVWeb", (req, res) => {
    const datos = req.body.name;
    let sql1 = 'insert into cv_contacto values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    conn.query(sql1, [datos.id, datos.email2, datos.phone, datos.phone2,
    datos.direccion, datos.poblacion, datos.cp, datos.provincia, datos.cc,
    datos.estado, datos.fecha, datos.genero, datos.facebook, datos.linkedin,
    datos.instagram, datos.twiter, datos.web], (error, results) => {
        if (error) {
            res.json("Ha ocurrideo un error en el servidor"); //mensaje para el clientre

        }

        sql1 = 'insert into cv_objetivos values(default,?,?,?)';
        conn.query(sql1, [datos.id, datos.objecper, datos.objecpro], (error, results) => {
            if (error) {
                res.json("Ha ocurrideo un error en el servidor"); //mensaje para el clientre

            }
        });
        datos.experiencias.forEach(experiencia => {
            sql1 = 'insert into cv_experiencias values(default,?,?,?,?,?,?,null,?)';
            conn.query(sql1, [datos.id, experiencia.puesto, experiencia.empresa, experiencia.lugar,
            experiencia.init, experiencia.end, experiencia.sinopsis], (error, results) => {
                if (error) {
                    res.json("Ha ocurrideo un error en el servidor"); //mensaje para el clientre

                }
            });
        });
        datos.formacion.forEach(hardskill => {
            sql1 = 'insert into cv_hardskills values(default,?,?,?,?,?,?,?)';
            conn.query(sql1, [datos.id, hardskill.centro, hardskill.diploma, hardskill.lugar,
            hardskill.fecha, hardskill.curso, hardskill.finalizado], (error, results) => {
                if (error) {
                    res.json("Ha ocurrideo un error en el servidor"); //mensaje para el clientre
                    console.log(error)
                }
            });
        });
        datos.habilidades.forEach(habilidad => {
            sql1 = 'insert into cv_hobbies values(default,?,?,?)';
            conn.query(sql1, [datos.id, habilidad.habilidad, habilidad.sinopsis], (error, results) => {
                if (error) {
                    res.json("Ha ocurrideo un error en el servidor"); //mensaje para el clientre
                    console.log(error)
                }
            });
        });
        datos.idiomas.forEach(idioma => {
            sql1 = 'insert into cv_idiomas values(default,?,?,?,?,?)';
            conn.query(sql1, [datos.id, idioma.idioma, idioma.nivel, idioma.certificado,
            idioma.fecha], (error, results) => {
                if (error) {
                    res.json("Ha ocurrideo un error en el servidor"); //mensaje para el clientre
                    console.log(error)
                }
            });
        });

        datos.tecnologias.forEach(tecnologia => {
            sql1 = 'insert into cv_techs values(default,?,?,?)';
            conn.query(sql1, [datos.id, tecnologia.tecnologia, tecnologia.sinopsis], (error, results) => {
                if (error) {
                    res.json("Ha ocurrideo un error en el servidor"); //mensaje para el clientre
                    console.log(error)
                }
            });
        });
        datos.intereses.forEach(interes => {
            sql1 = 'insert into cv_hobbies values(default,?,?,?)';
            conn.query(sql1, [datos.id, interes.interes, interes.sinopsis], (error, results) => {
                if (error) {
                    res.json("Ha ocurrideo un error en el servidor"); //mensaje para el clientre
                    console.log(error)
                }
            });
        });
    });
});

// ruta de inicio de sesión (login)
router.post("/login", (req, res) => {
    const datos = req.body;
    let detect = false;
    for (const propiedad in datos) {
        if (datos[propiedad].length === 0) {
            detect = true;
        }
    }
    // validacion de la longitud del campo de entrada
    if (detect) {
        res.json("Hay campos vacíos");
    } else {
        if (datos.usuario.search(/[@]/) > 0) { var sql = "select * from users where email = ?"; }
        else { var sql = "select * from users where usuario = ?"; }
        conn.query(sql, [datos.usuario], (error, results) => {
            if (error) {
                res.status(500).json("Ha ocurrido un error en el login.");
                throw error;
            }
            if (results.length > 0) {
                // email ok
                //comprobar el password desencriptado
                bcrypt.compare(datos.pass1, results[0].password, (error, isMatch) => {
                    if (error) {
                        res.status(500).json("Ha ocurrido un error en el login.");
                        throw error;
                    }
                    if (isMatch) {
                        // INICIAR SESION Y REDIRIGIR A LA PAG PERFIL
                        req.session.idUser = results[0].iduser;
                        req.session.user = results[0].usuario;

                        req.session.cookie.maxAge = 1000 * 60 * 60 * 24; // 1 dia

                        res.status(200).json(results[0]);
                    } else {
                        res.status(400).json("Contraseña incorrecta");
                    }
                });

            } else {
                res.status(400).json("nombre de usuario o correo electronico incorrecto");
            }
        });
    }
});




export default router;