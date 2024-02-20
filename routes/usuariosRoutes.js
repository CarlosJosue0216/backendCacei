import express from "express"
import { autenticar,createUser,userLoged} from "../controllers/usuariosController.js"
const routerUsers = express.Router()
routerUsers.post('/login',autenticar)
routerUsers.post('/register',createUser)
routerUsers.post('/userLoged',userLoged)
export default routerUsers