import express from "express"
import pool from "./config/bd.js";
import dotenv from "dotenv"
import routerUsers from "./routes/usuariosRoutes.js";
import routerQuestion from "./routes/preguntasRoutes.js";
import routerResult from "./routes/resultadosRoutes.js";
import fileRoutes from './routes/filesRoutes.js';
import cors from 'cors';
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

pool.getConnection()
  .then((connection) => {
    console.log('Conexión exitosa a la base de datos MySQL.');
    connection.release(); // Liberamos la conexión después de usarla
  })
  .catch((err) => {
    console.error('Error al conectarse a la base de datos MySQL:', err.message);
  });
  app.use('/uploads', express.static('uploads'));
  app.use('/api/usuarios',routerUsers);
  app.use('/api/preguntas',routerQuestion);
  app.use('/api/resultado',routerResult);
  app.use('/api/files', fileRoutes);
const PORT = 3000;
app.listen(PORT ,'0.0.0.0', ()=>{
    console.log( `server listening on port ${PORT} `);
} );