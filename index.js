import express from "express"
import pool from "./config/bd.js";
import routerUsers from "./routes/usuariosRoutes.js";
const app = express()
app.use(express.json())


pool.getConnection()
  .then((connection) => {
    console.log('Conexión exitosa a la base de datos MySQL.');
    connection.release(); // Liberamos la conexión después de usarla
  })
  .catch((err) => {
    console.error('Error al conectarse a la base de datos MySQL:', err.message);
  });

  app.use('/api/usuarios',routerUsers);
const PORT = 4000;
app.listen(PORT , ()=>{
    console.log( `server listening on port ${PORT} `);
} );