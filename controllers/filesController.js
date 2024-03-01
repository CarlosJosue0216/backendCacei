// controllers/fileController.mjs
import FileModel from "../models/files.js";

class FileController {
  static async uploadFiles(req, res) {
    try {
      const { idUsuario, idPregunta } = req.body; // Ajusta esto según cómo se envían los datos desde el front-end
      const files = req.files.map(
        (file) => new FileModel(file, idUsuario, idPregunta)
      );
      await Promise.all(files.map((file) => file.save()));

      res.send("Archivos subidos correctamente.");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al procesar la solicitud.");
    }
  }
}

export default FileController;
