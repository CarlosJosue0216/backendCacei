import Resultado from "../models/resultados.js";

export async function addResult(req, res) {
    const { idUsuario, idPregunta, idRespuesta, valoracion } = req.body;
    console.log(idUsuario);
    console.log(idPregunta);
    console.log(idRespuesta);
    try {
        const response = await Resultado.add(idPregunta, idRespuesta, idUsuario);
        console.log(response);
        res.status(200).json({ msg: "Guardado exitosamente el resultado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

export async function getAllResults(req, res) {
    try {
        const results = await Resultado.getAll(); // Suponiendo que tienes un método getAll en tu modelo Resultado
        res.status(200).json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}
export async function getByPregunta(req, res) {
    const {idPregunta} = req.body
    try {
        const results = await Resultado.getByPregunta(idPregunta); // Suponiendo que tienes un método getAll en tu modelo Resultado
        res.status(200).json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}