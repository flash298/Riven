
import Product from "../model/Product.js"
import Cart from "../model/Cart.js"

class UserController {
    index(req, res) {
        res.render('home');
    }

    edit(req, res) {
        res.render('edituser');
    }

    chat(req, res) {
        res.render('chat');
    }


    addtocart(req, res, next) {
       
        Product.findOne({ product_id: req.body.product_id })
        .then(product => {
            product = product ? product.toObject() : product
            res.render('cart', {product})
        })
        .catch(next)
        
        
    }


    payment(req, res, next) {

        const cart = new Cart(req.body)
        cart.total_price = cart.product_price * cart.quantity
        cart.save()

        
        Cart.findOne({ product_id: req.body.product_id })
        .then(cart => {
            cart = cart ? cart.toObject() : cart
            res.render('payment', {cart})
        })
        .catch(next)
        
        
    }
}

export default new UserController