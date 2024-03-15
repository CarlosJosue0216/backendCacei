// models/files.js
import pool from "../config/bd.js";

const FileModel = {
  async save(archivoFront, idUsuario, idPregunta) {
    const { filename, originalname, mimetype, size } = archivoFront;

    // Validar que los valores necesarios no sean undefined
    if (
      idUsuario === undefined ||
      filename === undefined ||
      idPregunta === undefined
    ) {
      throw new Error("Algunos valores necesarios no están definidos.");
    }

    try {
      const [rows, fields] = await pool.execute(
        "INSERT INTO files (filename, originalname, mimetype, size, idUsuario, idPregunta) VALUES (?, ?, ?, ?, ?, ?)",
        [filename, originalname, mimetype, size, idUsuario, idPregunta]
      );

      return `Respuestas Guardadas Correctamente ID: ${rows.insertId}`;
    } catch (error) {
      console.error("Error al guardar en la base de datos:", error);
      throw error;
    }
  },
  async getFiles() {
    try {
      const result = await pool.query("SELECT * from files");
      console.log(result)
      return result
    } catch (error) {
      return error
    }
  },
};

export default FileModel;
