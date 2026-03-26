import inventory from "../model/inventoryData.js"
const getItems = (req, res) => {

    res.status(200).json({
        success: true,
        data: inventory

    })


}
const addItems = (req, res) => {
    const newItem = {
        id: inventory.length + 1,
        name: req.body.name,
        category: req.body.category,
        quantity: req.body.quantity,
        price: req.body.price,
        supplier: req.body.supplier,
        expirydate: req.body.expirydate
    }
    console.log(newItem);
    inventory.push(newItem)
    console.log(inventory);

    res.status(201).json(newItem)


}
const updateItem = (req, res) => {
    const id = Number(req.params.id)
    const itemToUpdate = inventory.find(item => item.id === id)
    if (!itemToUpdate) {
        return res.status(404).json({
            message: "Item not found"

        })
    }
    if (req.body.name !== undefined) {
        itemToUpdate.name = req.body.name

    }
    if (req.body.category !== undefined) {
        itemToUpdate.category = req.body.category
    }
    if (req.body.quantity !== undefined) {
        itemToUpdate.quantity = req.body.quantity
    }
     if (req.body.price !== undefined) {
        itemToUpdate.price = req.body.price
    }
     if (req.body.supplier !== undefined) {
        itemToUpdate.supplier= req.body.supplier
    }
     if (req.body.expiryDate !== undefined) {
        itemToUpdate.expiryDate= req.body.expiryDate
    }
    console.log("updated sucessfully:", itemToUpdate);
    res.status(200).json(itemToUpdate)
}

const deleteItem = (req, res) => {
    const id = Number(req.params.id)
    const index = inventory.findIndex(item => item.id === id)

    if (index === -1) {
        return res.status(404).json({
            message: "Item not found"

        })
    }
    const deletedItem = inventory.splice(index, 1)
    res.json({
        success: true,
        data: deletedItem
    })
}


export {
    getItems,
    addItems,
    updateItem,
    deleteItem
}