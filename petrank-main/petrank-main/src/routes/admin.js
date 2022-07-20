import express from "express"
import adminController from "../app/controllers/Admin-Controller.js"
const router = express.Router()

router.get('/addproduct', adminController.addproduct )

router.get('/chat', adminController.chat )

router.get('/edit/:id', adminController.edit )

router.get('/del/:id', adminController.del )

router.post('/', adminController.creat )

router.put('/', adminController.update )

router.get('/', adminController.index )

export default router