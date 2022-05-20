import express from 'express'
import path from 'path'
import ejs from 'ejs'

const PORT = process.env.PORT || 9200
const app = express()

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.set('views', path.join(process.cwd(), 'src', 'views'))

app.use(express.static(path.join(process.cwd(), 'src', 'public')))

app.get('/', (req, res) => res.render('index'))
app.get('/login', (req, res) => res.render('login'))


app.listen(PORT, () => console.log('client server ready at *' + PORT))