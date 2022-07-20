import mongoose from "mongoose"

const Schema = mongoose.Schema
//const ObjectId = Schema.ObjectId;

const Product = new Schema({
  // name: {type: String},
  // product_id:  {type: String},
  // image:  {type: String},
  // price: {type: Number},
  // description: {type: String}

  name:  String,
  product_id:   String,
  image:   String,
  price:  Number,
  description:  String
},
{ typeKey: '$type' }
)

export default mongoose.model('Product', Product, 'Products');