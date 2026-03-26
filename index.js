import express from "express"
import inventoryRouter from "./routes/inventoryRoutes.js";
import errorHandler from "./middleware/errorHandler.js";


const app=express()
app.use(express.json())
app.use('/items',inventoryRouter)
app.use(errorHandler)
app.listen(5000,()=>{
    console.log("server running at localhost:5000");
})