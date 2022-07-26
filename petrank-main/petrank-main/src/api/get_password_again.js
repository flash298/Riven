import connection from "../../DB/mysql/init.js"
import nodemailer from "nodemailer"

const apiGetPasswordAgain= async (req, res)=> {
    const [rows, fields]= await connection.execute("SELECT password FROM user WHERE id_user= ?", [req.body.id_user])
    let testAccount = await nodemailer.createTestAccount();
    let transporter= nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user, // your email
            pass: testAccount.pass, // your password
          },
    })
    let info = await transporter.sendMail({
        from: testAccount.user, // sender address
        to: req.body.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>${rows[0].password}</b>`, // html body
      });
    transporter.sendMail(info, (error, info)=> {
        if(error) {
            console.log(error)
        }
        else {
            console.log("Email send success")
        }
    })
    return res.redirect("http://localhost:3001/login")
}

export default apiGetPasswordAgain