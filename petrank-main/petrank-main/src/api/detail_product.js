import connection from "../../DB/mysql/init.js"

const apiDetailProducts= async (req, res)=> {
    const [rows, fields]= await connection.execute("SELECT * FROM products WHERE id_product=?", [req.query.id_product])
    return res.json(rows[0])
}

export default apiDetailProducts