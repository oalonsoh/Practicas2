import { createConnection } from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const conn = createConnection({
    host: process.env.DB_RUTE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA_BASE
});

conn.connect( err => {
    if (err) throw err;
    console.log("Conexion a la base de datos ok!");
});

const _conn = conn;
export { _conn as conn };