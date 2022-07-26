import connection from "../../DB/mysql/init.js"
import { v4 } from "uuid"

const apiChancgeUserProfile = async (req, res)=> {
    const [rows, fields]= await connection.execute("INSERT INTO user(id_user, name, phone_number, email, address, account) VALUES(?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE id_user=VALUES(id_user), name=?, phone_number=?, email=?, address= ?, account= ?", [req.body.id_user, req.body.name, req.body.phone_number, req.body.email, req.body.address, req.body.account, req.body.name, req.body.phone_number, req.body.email, req.body.address, req.body.account])
    return res.json("success")
}

export default apiChancgeUserProfile 