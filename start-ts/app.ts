import express,{Application,Request,Response} from "express";
const app: Application= express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/",(req: Request,res :Response)=>{
res.send("wel2222come")

})
const PORT:number=8080;
app.listen(PORT,()=>{console.log(`Server is up and renning on PORT ${PORT}`)})