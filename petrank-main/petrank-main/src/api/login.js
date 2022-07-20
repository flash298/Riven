import connection from "../../DB/mysql/init.js"

const apiLogin= async (req, res)=> {
    const [rows, fields]= await connection.execute("SELECT id_user, name, phone_number, email, address, account FROM user WHERE account=? AND password=?", [req.body.account, req.body.password])
    return res.json(rows)
}

export default apiLogin