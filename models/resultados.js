import pool from "../config/bd.js";

const Resultado = {
    async add (idPregunta,idRespuesta,idUsuario){
      try {
        // Verificar si ya hay una respuesta para esa pregunta y ese usuario
        const existingResult = await pool.query(
          'SELECT * FROM resultado WHERE idPregunta = ? AND idUsuario = ?',
          [idPregunta, idUsuario]
        );
  
        if (existingResult.length > 0) {
          // Si ya existe, actualiza la respuesta
          await pool.query(
            'UPDATE resultado SET idRespuesta = ? WHERE idPregunta = ? AND idUsuario = ?',
            [idRespuesta, idPregunta, idUsuario]
          );
          return { msg: 'Actualizado exitosamente' };
        } else {
          // Si no existe, agrega una nueva respuesta
          await pool.query(
            'INSERT INTO resultado (idPregunta, idRespuesta, idUsuario) VALUES (?, ?, ?)',
            [idPregunta, idRespuesta, idUsuario]
          );
          return { msg: 'Guardado exitosamente' };
        }
  
        
      } catch (error) {
        return { msg: error };
      }
    },
    async findByUser(userId) {
        const [rows] = await pool.query("SELECT * FROM resultados WHERE idUsuario = ?", [userId]);
        return rows.length ? rows[0] : null;
      },
      async addArgumentacion(){

      }
}
export default Resultado