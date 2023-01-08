import Router from 'express';
import { conn } from "./connection.js";

const router = new Router();


router.post("/insertCVWeb", (req, res) => {
    const datos = req.body.name;
    let sql1 = 'insert into cv_contacto values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    conn.query(sql1, [datos.id, datos.email2, datos.phone, datos.phone2,
    datos.direccion, datos.poblacion, datos.cp, datos.provincia, datos.cc,
    datos.estado, datos.fecha, datos.genero, datos.linkedin, datos.facebook,
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
    let datos = req.body;
    console.log(datos);
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
        if (datos.usuario.search(/[@]/) > 0) { var sql = "select * from cv_user where email = ?"; }
        else { var sql = "select * from cv_user where usuario = ?"; }
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

router.post("/register", (req, res) => {
    const datos = req.body;
    let detect = false;
    for (const propiedad in datos) {
        if (datos[propiedad].length === 0) {
            detect = true;
        }
    }
    // validacion de campos usuario al registrarse 
    if (detect) {
        res.json("Hay campos vacíos");
    } else if (datos.usuario.length < 6) {
        res.json("Campo usuario con formato incorrecto");
    } else if (!emailREGEXP.test(datos.email)) {
        res.json("Campo email con formato incorrecto");
    } else if (datos.nombre.length < 3 || !nombreREGEXP.test(datos.nombre)) {
        res.json("Campo nombre con formato incorrecto");
    } else if (datos.apellidos.length < 3 || !nombreREGEXP.test(datos.apellidos)) {
        res.json("Campo apellidos con formato incorrecto");
    } else if (datos.pass1.length < 8 || datos.pass1.search(/[A-Z]/) < 0 || datos.pass1.search(/[0-9]/) < 0) {
        res.json("Campo contraseña con formato incorrecto");
    } else if (datos.pass1 !== datos.pass2) {
        res.json("Las contraseñas no coinciden");
    } else {

        // comprobar que no exista otra cuenta igual (correo y username)
        const sql = 'select usuario from users where usuario = ?';
        conn.query(sql, [datos.usuario], (error, results) => {
            if (error) {
                res.json("Ha ocurrido un error en la base de datos!");
                throw error;
            }
            if (results.length != 0) {
                res.json("El nombre de usuario introducido ya existe!");
            }
            else {
                const sql = 'select email from users where email = ?';
                conn.query(sql, [datos.email], (error, results) => {
                    if (error) {
                        res.json("Ha ocurrido un error en la base de datos!");
                        throw error;
                    }
                    if (results.length != 0) {
                        res.json("El email introducido ya existe!");
                    }
                    else {
                        const salt = bcrypt.genSaltSync(10);
                        const hashPass = bcrypt.hashSync(datos.pass1, salt);

                        const sql = 'insert into users values (default, ?, ?, ?, ?, ?, 2)';
                        conn.query(sql, [datos.nombre, datos.apellidos, datos.usuario, datos.email, hashPass], error => {
                            if (error) {
                                res.json("Ha ocurrido un error en la base de datos!");
                                throw error;
                            }
                            res.json(" ");
                        });
                    }
                });
            }
        });
    }
});



export default router;