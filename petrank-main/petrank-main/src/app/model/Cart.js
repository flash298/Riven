import mongoose from "mongoose"

const Schema = mongoose.Schema
//const ObjectId = Schema.ObjectId;

const Cart = new Schema({
product_id: String,
product_name: String,
product_price: Number,
quantity: Number,
total_price: Number
},
// { typeKey: '$type' }
)

export default mongoose.model('Cart', Cart, 'Cart');