import pool from "../config/bd.js";

const Resultado = {
  async add(idPregunta, idRespuesta, idUsuario) {
    try {
      // Intenta realizar un UPDATE
      const updateResult = await pool.query(
        'UPDATE resultado SET idRespuesta = ? WHERE idPregunta = ? AND idUsuario = ?',
        [idRespuesta, idPregunta, idUsuario]
      );
  
      if (updateResult.affectedRows > 0 && updateResult.changedRows > 0) {
        // Si se actualizó al menos una fila y realmente se realizaron cambios
        return { msg: 'Pregunta actualizada exitosamente' };
      }
  
      // Si no se actualizó ninguna fila o no se realizaron cambios, procede a la inserción
      await pool.query(
        'INSERT INTO resultado (idPregunta, idRespuesta, idUsuario) VALUES (?, ?, ?)',
        [idPregunta, idRespuesta, idUsuario]
      );
  
      return { msg: 'Guardado exitosamente' };
    } catch (error) {
      return { msg: error.message };
    }
  },

  async findByUser(userId) {
    const [rows] = await pool.query(
      "SELECT * FROM resultados WHERE idUsuario = ?",
      [userId]
    );
    return rows.length ? rows[0] : null;
  },
  async addArgumentacion() {},
};
export default Resultado;
