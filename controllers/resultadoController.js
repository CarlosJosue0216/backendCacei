import Resultado from "../models/resultados.js";

export async function addResult(req,res){
    const  {idUsuario , respuestaSelecionada} = req.body

    try {
        for (const preguntaId in respuestaSelecionada) {
            console.log(preguntaId)
            const respuesta= respuestaSelecionada[preguntaId]
            console.log(respuesta)
            await Resultado.add(preguntaId,  respuesta,idUsuario)
        }
        res.json({
            msg:"Encuesta guardada correctamente"
        })
    } catch (error) {
        res.json({
            msg:error.message
        })
    }
}