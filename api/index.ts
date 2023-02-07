import express from 'express'
import dotenv from 'dotenv';
import menu from './src/routes/menu'

const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json

dotenv.config();
const port = process.env.PORT;

app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!')
    res.send('pong')
})

app.use('/api/menu', menu)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
}) 