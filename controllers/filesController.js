// controllers/filesController.js
import { json } from "express";
import FileModel from "../models/files.js";
import fs from "node:fs";
class FileController {
  static async uploadFile(req, res) {
    const archivoFront = req.file;
    console.log(archivoFront)
    const { idUsuario, idPregunta } = req.body;
    try {
      saveImage(archivoFront);
      const resultado = await FileModel.save(
        archivoFront,
        idUsuario,
        idPregunta
      );
      console.log(resultado)
      return res.json({
        resultado,
      });
    } catch (error) {
      console.log(error)
      return res.json({
        resultado,
      });
    }
  }
}
function saveImage(file) {
  const newPath = `./uploads/${file.originalname}`;
  fs.renameSync(file.path, newPath);
  return newPath;
}
export default FileController;
