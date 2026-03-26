import express from "express"
const inventoryRouter=express.Router()
import { getItems } from "../controllers/inventoryController.js"

inventoryRouter.get("/",getItems)
export default inventoryRouter
