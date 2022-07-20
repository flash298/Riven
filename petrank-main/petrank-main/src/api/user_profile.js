import connection from "../../DB/mysql/init.js"
import { v4 } from "uuid"

const apiUserProfile = async (req, res)=> {
    const [rows, fields]= await connection.execute("SELECT id_user, name, phone_number, email, address, account FROM user WHERE id_user= ?", [req.body.id_user || ""])
    return res.json(rows)
}

export default apiUserProfile 