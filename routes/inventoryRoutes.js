import express from "express"
const inventoryRouter=express.Router()
import { addItems, getItems, updateItem } from "../controllers/inventoryController.js"

inventoryRouter.get("/",getItems)
inventoryRouter.post("/",addItems)
inventoryRouter.patch("/:id",updateItem)
export default inventoryRouter
