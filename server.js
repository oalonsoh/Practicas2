import Express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import redirect from "./routes/redirect.js";
import consultas from "./routes/consultas.js";
import consulta from "./routes/consultas_2.js";
import consulta3 from "./routes/consulta_3.js";

const app = Express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(port, () => {
    console.log(`Conexión por puerto: http://localhost:${port}`)
});

app.use(Express.json());
app.use(Express.static(__dirname + "/public"));

app.use(redirect, consultas, consulta, consulta3);

app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/public/404.html");
});