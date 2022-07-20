import connection from "../../DB/mysql/init.js"

const apiGetCart= async (req, res)=> {
    const [rows, fields]= await connection.execute("SELECT photo, title, cost, cart.id_product FROM cart INNER JOIN products ON products.id_product = cart.id_product WHERE cart.id_user= ?", [req.body.id_user || ""])
    return res.json(rows)
}

export default apiGetCart