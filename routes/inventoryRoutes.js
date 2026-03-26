import express from "express"
const inventoryRouter=express.Router()
import { addItems, deleteItem, getItems, updateItem } from "../controllers/inventoryController.js"

inventoryRouter.get("/",getItems)
inventoryRouter.post("/",addItems)
inventoryRouter.patch("/:id",updateItem)
inventoryRouter.delete("/:id",deleteItem)

export default inventoryRouter
