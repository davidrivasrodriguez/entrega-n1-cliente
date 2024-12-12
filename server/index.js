import express from 'express';
import cors from 'cors';;
const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App running and listening on port: ${port}`)
})
