import Resultado from "../models/resultados.js";

export async function addResult(req,res){
    const  {idUsuario , idPregunta,respuesta,valoracion} = req.body
    const response = await Resultado.add(idPregunta,respuesta,idUsuario)
    console.log(response)
}