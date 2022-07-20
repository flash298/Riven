import Product from '../model/Product.js'


class ProductsController {
    

    detail(req, res, next) {
        
         Product.findOne({ product_id: req.params.id })
            .then(product => {
                product = product ? product.toObject() : product
                res.render('products', {product})
            })
            .catch(next)
    }

    
}

export default new ProductsController