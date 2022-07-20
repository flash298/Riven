import mysql from "mysql2/promise"
import bluebird from "bluebird"

const connection= await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "pj",
    password: "",
    Promise: bluebird
})

export default connection