import express,{json} from 'express';
import cors from 'cors'
import twitterRoutes from './routes/twitterRoutes.js'
const app= express()


app.use(cors())
app.use(json())

app.disable('x-powered-by')

app.use(twitterRoutes)

app.get('/',(req,res)=>{
    res.json({ message : 'hola mundo' })
})

const PORT = process.env.PORT ?? 3007

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})