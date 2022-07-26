import connection from "../../DB/mysql/init.js"

const apiSearch= async (req, res)=> {
    const [rows, fields]= await connection.execute(`SELECT * FROM products WHERE title LIKE '${req.params.query_search}%'`)
    return res.json(rows)
}

export default apiSearch