import pool from "../config/bd.js";

class FileModel {
  constructor(file, idUsuario, idPregunta) {
    this.file = file;
    this.idUsuario = idUsuario;
    this.idPregunta = idPregunta;
  }

  async save() {
    const { filename, originalname, mimetype, size, idUsuario, idPregunta } = this;
    try {
      const [rows, fields] = await pool.execute(
        'INSERT INTO files (filename, originalname, mimetype, size, idUsuario, idPregunta) VALUES (?, ?, ?, ?, ?, ?)',
        [filename, originalname, mimetype, size, idUsuario, idPregunta]
      );

      console.log(`Archivo guardado en la base de datos. ID: ${rows.insertId}`);
    } catch (error) {
      console.error('Error al guardar en la base de datos:', error);
      throw error;
    }
  }
}

export default FileModel;
