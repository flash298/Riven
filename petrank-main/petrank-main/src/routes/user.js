import express from "express"
const router = express.Router()
import usersController from "../app/controllers/User-controller.js"


router.get('/edit', usersController.edit )

router.get('/chat', usersController.chat )

router.post('/cart', usersController.addtocart )


router.post('/payment', usersController.payment )


router.get('/', usersController.index )


export default router