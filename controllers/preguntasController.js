
import Preguntas from "../models/preguntas.js"
import Respuestas from "../models/respuestas.js"

export async function addQuestion(req,res){
    const {titulo,criterio,tipo} = req.body
    const byId = await Preguntas.findQuestionByTitle(titulo)
    console.log(byId)
  if (byId) {
    return res.status(500).json({ msg: 'Esta pregunta ya existe' });
  }
  try {
    const pregunta = await Preguntas.create(titulo, criterio,tipo);
    if (!pregunta) {
      return res.status(500).json({ msg: 'Error en el servidor' });
    }else{
      return res.json({ msg: 'Agregado correctamente' });
    }
    
  }  catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Error en el servidor' });
  }

}
export async function showQuestions(req,res){
    try {
        const pregunta = await Preguntas.findAllQuestion();
        if (!pregunta) {
          return res.status(500).json({ msg: 'Error en el servidor' });
        }else{
          return res.json({ result: pregunta });
        }
        
      }  catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
      }
}
export async function showQuestionById(req,res){
    const {id} = req.body
    try {
        const pregunta = await Preguntas.findQuestionById(id);
        if (!pregunta) {
          return res.status(500).json({ msg: 'Error en el servidor' });
        }else{
          return res.json({ msg: pregunta });
        }
        
      }  catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
      }
}
export async function addQuestionAndAnswers(req, res) {
    try {
      const { titulo, criterio,tipo, respuestas } = req.body;
  
      // Registrar la pregunta
      const pregunta = await Preguntas.create(titulo,criterio,tipo );
        
      // Registrar las respuestas asociadas a la pregunta
     
      const respuestasRegistradas = await Promise.all(
        respuestas.map(async (respuesta) => {
          return await Respuestas.create(pregunta, respuesta.contenido);
        })
      );
        
      res.status(201).json({
        msg:"Pregunta registrada correctamente"
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export async function viewAll(req,res){
    try {
      // Obtener todas las preguntas
      const preguntas = await Preguntas.findAllQuestion();

      // Obtener todas las respuestas ordenadas por pregunta_id
      const respuestas = await Respuestas.findAllAnswer();

      // Asociar las respuestas a las preguntas en un objeto JSON
      const preguntasConRespuestas = preguntas.map((pregunta) => {
        return {
          ...pregunta,
          respuestas: respuestas.filter((respuesta) => respuesta.idPregunta == pregunta.id),
        };
      });
  
      res.status(200).json(preguntasConRespuestas);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las preguntas y respuestas ordenadas." });
    }
  }