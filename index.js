import express from "express"
import inventoryRouter from "./routes/inventoryRoutes.js";


const app=express()
app.use(express.json())
app.use('/items',inventoryRouter)
app.listen(5000,()=>{
    console.log("server running at localhost:5000");
})