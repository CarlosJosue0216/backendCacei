import express from "express"
import { autenticar,createUser} from "../controllers/usuariosController.js"
const routerUsers = express.Router()
routerUsers.post('/login',autenticar)
routerUsers.post('/register',createUser)
export default routerUsers