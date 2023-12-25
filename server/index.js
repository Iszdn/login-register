
import express from 'express';
import  mongoose  from 'mongoose';
import  dotenv  from 'dotenv';
import router from './src/routers/users.js';
const app = express()
app.use(express.json())
dotenv.config()



app.use("/",router)

const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
const PORT=process.env.PORT



mongoose.connect(url).then(()=>console.log("connect")).catch((error)=>console.log(error))


app.listen(PORT, () => {
  console.log(`Example app listening on port `)
})