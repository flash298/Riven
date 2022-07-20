import connection from "../../DB/mysql/init.js"
import { v4 } from "uuid"

const apiSignup= async (req, res)=> {
    const [rows, fields]= await connection.execute("INSERT INTO user VALUES(?, ?, ?, ?, ?, ?, ?)", [v4(), req.body.name || "", req.body.phone_number || "", req.body.email || "", req.body.address || "", req.body.account || "", req.body.password || ""])
    return res.json(rows)
}

export default apiSignup