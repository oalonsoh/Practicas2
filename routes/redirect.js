import Redirect from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const redirect = Redirect();
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const __dirnameRoutes = __dirname.replace("routes","");

redirect.get("/CVWeb/Experiencia", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/reg_experiencia.html");
});

redirect.get("/CVWeb/Cuentanos", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/reg_cuentanos.html");
});

redirect.get("/CVWeb/Datos", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/reg_datos.html");
});

redirect.get("/E403", (req, res) => {
    res.sendFile(__dirnameRoutes + "/public/403.html");
});

export default redirect ;
