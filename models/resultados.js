import pool from "../config/bd.js";

const Resultado = {
    async add (idPregunta,idRespuesta,idUsuario){
      try {
        
        const result = await pool.query(
          'INSERT INTO resultado (idPregunta, idRespuesta, idUsuario) VALUES (?, ?, ?)',
          [idPregunta, idRespuesta, idUsuario]
        );
    
        return({msg:`Guardado exitosamente ` } )
        
      } catch (error) {
        res.json({msg:error  } )
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