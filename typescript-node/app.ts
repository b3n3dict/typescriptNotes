import express,{Application,Request,Response,NextFunction}  from "express";
import user from './routes/data'

const app:Application = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/",user)
app.get("/:name",user)



let PORT  = 5000
app.listen(PORT,()=>console.log(`server runing on port ${PORT}`))