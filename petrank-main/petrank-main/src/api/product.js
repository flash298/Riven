import connection from "../../DB/mysql/init.js"

const apiProducts= async (req, res)=> {
    const [rows, fields]= await connection.execute("SELECT * FROM products")
    return res.json(rows)
}

export default apiProducts