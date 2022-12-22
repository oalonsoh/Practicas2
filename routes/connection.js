import { createConnection } from 'mysql';


const conn = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "open2job"
});

conn.connect( err => {
    if (err) throw err;
    console.log("Se ha conectado la BD");
});

const _conn = conn;
export { _conn as conn };