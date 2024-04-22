import express from "express";
import pool from "./config/bd.js";
import routerUsers from "./routes/usuariosRoutes.js";
import routerQuestion from "./routes/preguntasRoutes.js";
import routerResult from "./routes/resultadosRoutes.js";
import fileRoutes from './routes/filesRoutes.js';
import cors from 'cors';

const app = express();

// Configurar CORS antes de definir las rutas
app.use(cors());

app.use(express.json());

pool.getConnection()
  .then((connection) => {
    console.log('Conexión exitosa a la base de datos MySQL.');
    connection.release(); // Liberamos la conexión después de usarla
  })
  .catch((err) => {
    console.error('Error al conectarse a la base de datos MySQL:', err.message);
  });

app.use('/uploads', express.static('uploads'));
app.use('/api/usuarios', routerUsers);
app.use('/api/preguntas', routerQuestion);
app.use('/api/resultado', routerResult);
app.use('/api/files', fileRoutes);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
