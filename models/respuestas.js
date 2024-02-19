import pool from "../config/bd.js";

const Respuestas = {
  async create(idPregunta, contenido) {
    const [result] = await pool.query(
      "INSERT INTO respuestas (idPregunta, contenido) VALUES (?, ?)",
      [idPregunta, contenido]
    );

    const respuestaId = result.insertId;
      return { id: respuestaId, idPregunta: idPregunta, contenido };
  },
  async findAnswerById(answerId) {
    const [rows] = await pool.query("SELECT * FROM respuestas WHERE id = ?", [
      answerId,
    ]);
    return rows.length ? rows[0] : null;
  },
  async findAnswerByIdQuestion(questionId) {
    const [rows] = await pool.query("SELECT * FROM respuestas WHERE idPregunta = ?", [
      questionId,
    ]);
    return rows.length ? rows : null;
  },
  async findAllAnswer(){
    const [rows] = await pool.query("SELECT * FROM respuestas order by idPregunta");
      return rows.length ? rows : null;
  }
};
export default Respuestas;