import express from "express"
import { autenticar,createUser,userLoged,getAllUser} from "../controllers/usuariosController.js"
const routerUsers = express.Router()
routerUsers.post('/login',autenticar)
routerUsers.post('/register',createUser)
routerUsers.post('/userLoged',userLoged)
routerUsers.get('/getUsers',getAllUser)
export default routerUsers