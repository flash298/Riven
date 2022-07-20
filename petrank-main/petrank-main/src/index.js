import express from "express"
import morgan from "morgan"
import path from "path"
import handlebars from "express-handlebars"
import route from "./routes/index.js"
import db from "./config/db/index.js"
import methodOverride from "method-override"
import { fileURLToPath } from 'url';
import router from "./routes/RouteForApi/fullApi.js"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = 3001

//Method overide
app.use(methodOverride('_method'))

//Connect DB
db()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(router)

//HTTP Logger
app.use(morgan('combined'))

//Template enginee

app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a+b,
    nhan:(a, b) => a*b
  }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources','views'))

route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})