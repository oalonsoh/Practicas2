import Redirect from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const redirect = Redirect();
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const __dirnameRoutes = __dirname.replace("routes","");

redirect.get("/CVWeb", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/cvweb.html");
});

redirect.get("/CVWeb/Login", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/login.html");
});

redirect.get("/CVWeb/Experiencia", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/registro/reg_experiencia.html");
});

redirect.get("/CVWeb/Cuentanos", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/registro/reg_cuentanos.html");
});

redirect.get("/CVWeb/Datos", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/registro/reg_datos.html");
});

redirect.get("/CVWeb/Idiomas", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/registro/reg_idiomas.html");
});

redirect.get("/CVWeb/Estudios", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/registro/reg_estudios.html");
});

redirect.get("/CVWeb/SoftSkills", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/registro/reg_skills.html");
});

redirect.get("/CVWeb/Tecnologias", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/registro/reg_tecnologias.html");
});

redirect.get("/CVWeb/Hobbies", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/registro/reg_intereses.html");
});

redirect.get("/E403", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/403.html");
});

export default redirect ;
