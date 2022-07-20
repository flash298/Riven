import connection from "../../DB/mysql/init.js"

const apiArticle= async (req, res)=> {
    const [rows, fields]= await connection.execute("SELECT * FROM article")
    return res.json(rows)
}

export default apiArticle