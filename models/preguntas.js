import pool from "../config/bd.js";

const Preguntas = {
  async create(titulo, criterio, tipo) {
    const [result] = await pool.query(
      "INSERT INTO preguntas (titulo, criterio, tipo) VALUES (?, ?, ?)",
      [titulo, criterio, tipo]
    );

    return result.insertId;
  },
  async findQuestionById(questionId) {
    const [rows] = await pool.query("SELECT * FROM preguntas WHERE id = ?", [
      questionId,
    ]);
    return rows.length ? rows[0] : null;
  },
  async findQuestionByTitle(titulo) {
    const [rows] = await pool.query("SELECT * FROM preguntas WHERE titulo = ?", [
      titulo,
    ]);
    return rows.length ? rows[0] : null;
  },
  async findAllQuestion(){
    const [rows] = await pool.query("SELECT * FROM preguntas");
      return rows.length ? rows : null;
  }
};
export default Preguntas;