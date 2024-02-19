import express from "express"
import { addQuestion,showQuestionById,showQuestions,addQuestionAndAnswers,viewAll } from "../controllers/preguntasController.js"
const routerQuestion = express.Router()
routerQuestion.post('/addQuestion',addQuestion)
routerQuestion.post('/addQuestionAndAnswers',addQuestionAndAnswers)
routerQuestion.get('/viewQuestionById',showQuestionById)
routerQuestion.get('/viewAllQuestion',showQuestions)
routerQuestion.get('/viewAll',viewAll)

export default routerQuestion