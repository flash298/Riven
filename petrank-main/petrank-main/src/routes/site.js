import express from "express"
const router = express.Router()
import siteController from "../app/controllers/Site-controller.js"

router.post('/search', siteController.search )

router.get('/signup', siteController.signup )

router.get('/', siteController.index )

router.post('/', siteController.newacc )


export default router