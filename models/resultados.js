import pool from "../config/bd.js";

const Resultado = {
    async add (idPregunta,idRespuesta,idUsuario,observaciones){
        const [result] = await pool.query(
            'INSERT INTO resultados (idPregunta, idRespuesta, idUsuario,observaciones) VALUES (?, ?, ?,?)',
            [idPregunta, idRespuesta, idUsuario,observaciones]
          );
      
          return result.insertId;
    },
    async findByUser(userId) {
        const [rows] = await pool.query("SELECT * FROM resultados WHERE idUsuario = ?", [userId]);
        return rows.length ? rows[0] : null;
      }
}
export default Resultado