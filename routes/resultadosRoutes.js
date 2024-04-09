import express from "express"
import { addResult,getAllResults,getByPregunta } from "../controllers/resultadoController.js"
const routerResult = express.Router()
routerResult.post('/addResult',addResult)
routerResult.get('/getAllResults',getAllResults)
routerResult.post('/getByIdPregunta',getByPregunta)

export default routerResult