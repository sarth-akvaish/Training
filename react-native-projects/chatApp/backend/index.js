import express from 'express'
import cors from 'cors'

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json('Server is up and running')
})

app.listen(PORT,()=>{
    console.log(`Server is running on the ${PORT}`)
})