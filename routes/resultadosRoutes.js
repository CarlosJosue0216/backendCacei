import express from "express"
import { addResult,getAllResults } from "../controllers/resultadoController.js"
const routerResult = express.Router()
routerResult.post('/addResult',addResult)
routerResult.get('/getAllResults',getAllResults)

export default routerResult