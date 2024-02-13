import express from "express"
import { autenticar } from "../controllers/usuariosController.js"
const routerUsers = express.Router()
routerUsers.post('/login',autenticar)
export default routerUsers