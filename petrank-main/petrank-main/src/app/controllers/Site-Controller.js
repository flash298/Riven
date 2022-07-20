import Product from "../model/Product.js";
import User from "../model/User.js";

class SiteController {
  index(req, res) {
    Product.find({})
      .then((products) => {
        products = products.map((product) => product.toObject());
        res.render("home", { products });
      })
      .catch((error) => next(error));
  }

  search(req, res) {
    Product.find({ name: { $regex: req.body.q } })
      .then((products) => {
        products = products.map((product) => product.toObject());
        res.render("search", { products });
      })
      .catch((error) => next(error));
  }

  signup(req, res) {
    res.render("signup");
  }

  newacc(req, res) {
    const user = new User(req.body);
    user.save();

    Product.find({})
      .then((products) => {
        products = products.map((product) => product.toObject());
        res.render("home", { products });
      })
      .catch((error) => next(error));
  }
}

export default new SiteController();
