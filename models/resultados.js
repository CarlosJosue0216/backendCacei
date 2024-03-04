import pool from "../config/bd.js";

const Resultado = {
    async add (idPregunta,respuesta,idUsuario){
        const [result] = await pool.query(
            'INSERT INTO resultado (idPregunta, respuesta, idUsuario) VALUES (?, ?, ?)',
            [idPregunta, respuesta, idUsuario]
          );
      
          return result.insertId;
    },
    async findByUser(userId) {
        const [rows] = await pool.query("SELECT * FROM resultados WHERE idUsuario = ?", [userId]);
        return rows.length ? rows[0] : null;
      },
      async addArgumentacion(){

      }
}
export default Resultado