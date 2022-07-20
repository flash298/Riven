import express from "express"
import apiArticle from "../api/article.js"
import ProductController from "../app/controllers/Product-controller.js"
const router = express.Router()

router.get('/:id', ProductController.detail)

// router.put('/:id', productsController.update )

router.get("/api/v1/article", apiArticle)

export default router