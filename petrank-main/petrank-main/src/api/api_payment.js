import connection from "../../DB/mysql/init.js"
import Stripe from "stripe"
const stripe= new Stripe("pk_test_51KuWAjDq3U6SJ691wGf9YHe0wZC0O51ddczJ4oSBnGTwYgx9VZW4s1GIie1jWY4TiLHoEzuPzdQqtalMuA9twxoS00wCLbL1O7")

const apiPayment= (req, res)=> {
    console.log(req.body)
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        address: {
            line1: 'TC 9/4 Old MES colony',
            postal_code: '452331',
            city: 'Indore',
            state: 'Madhya Pradesh',
            country: 'India',
        }
    })
    .then((customer)=> {
        return stripe.charges.create({
            amount: 2500,     // Charing Rs 25
            description: 'Web Development Product',
            currency: 'INR',
            customer: customer.id
        })
    })
    .then((charge)=> {
        res.send("Success")
    })
    .catch((err)=> {
        res.send("Error")
    })
}

export default apiPayment