import express from "express"
import { addResult } from "../controllers/resultadoController.js"
const routerResult = express.Router()
routerResult.post('/addResult',addResult)

export default routerResult