import express from "express"
const inventoryRouter=express.Router()
import { addItems, deleteItem, getItems, singleItem, updateItem,replaceItem } from "../controllers/inventoryController.js"
import validateItem from "../middleware/validation.js"
inventoryRouter.get("/",getItems)
inventoryRouter.get("/:id",singleItem)
inventoryRouter.post("/addItem",validateItem,addItems)
inventoryRouter.patch("/:id",validateItem,updateItem)
inventoryRouter.put("/:id", validateItem, replaceItem)
inventoryRouter.delete("/deleteItem/:id",deleteItem)

export default inventoryRouter
