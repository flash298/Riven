import connection from "../../DB/mysql/init.js"

const apiAddToCart= async (req, res)=> {
    const [rows, fields]= await connection.execute("INSERT INTO cart VALUES(?, ?)", [req.body.id_user, req.body.id_product])
    return res.json(rows)
}

export default apiAddToCart