import express from "express"
import connection from "../../../DB/mysql/init.js"
import apiAddToCart from "../../api/add_to_cart.js"
import apiPayment from "../../api/api_payment.js"
import apiArticle from "../../api/article.js"
import apiChancgeUserProfile from "../../api/change_user_profile.js"
import apiDetailProducts from "../../api/detail_product.js"
import apiGetCart from "../../api/get_cart.js"
import apiGetPasswordAgain from "../../api/get_password_again.js"
import apiLogin from "../../api/login.js"
import apiProducts from "../../api/product.js"
import apiSearch from "../../api/search.js"
import apiSignup from "../../api/signup.js"
import apiUserProfile from "../../api/user_profile.js"
const router= express.Router()

router.get("/api/v1/article", apiArticle)
router.get("/api/v1/products", apiProducts)
router.get("/api/v1/detail/product", apiDetailProducts)
router.post("/api/v1/signup", apiSignup)
router.post("/api/v1/login", apiLogin)
router.post("/api/v1/user/profile", apiUserProfile)
router.post("/api/v1/add/to/cart", apiAddToCart)
router.post("/api/v1/get/cart/user", apiGetCart)
router.post("/api/v1/payment", apiPayment)
router.post("/api/v1/change/user/profile", apiChancgeUserProfile)
router.post("/api/v1/forget/password", apiGetPasswordAgain)

router.get("/product/:id", (req, res)=> {
    res.render("detail_products")
})
router.get("/login", (req, res)=> {
    res.render("login")
})
router.get("/user/cart", (req, res)=> {
    res.render("cart")
})
router.get("/payment/:id_product", (req, res)=> {
    res.render("payment")
})
router.get("/api/v1/get/search", apiSearch)
router.post("/payment/:id_product/:id_user", (req, res)=> {
    connection.execute("DELETE FROM cart WHERE id_user=? AND id_product=?", [req.params.id_user, req.params.id_product])
    res.redirect("/#")
})
router.get("/profile/:id_user", (req, res)=> {
    res.render("profile")
})
router.get("/forget/password", (req, res)=> {
    res.render("forget_password")
})
router.get("/search", (req, res)=> {
    res.render("search")
})

export default router