import inventory from "../model/inventoryData.js"
const getItems = (req, res) => {
    let result = inventory
    const { name, category, quantity } = req.query
    if (name) {
        result = inventory.filter(item => item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))

    }
    if (quantity) {
        result = inventory.filter(item => item.quantity === Number(quantity))
    }
    if (category) {
        result = inventory.filter(item => item.category.toLocaleLowerCase() === category.toLocaleLowerCase())
    }
    res.status(200).json({
        success: true,
        count:result.length,
        data: result

    })


}
const singleItem = (req, res) => {
    const id = Number(req.params.id)
    const item = inventory.find(item => item.id === id)
    if (!item) {
        return res.status(404).json({
            message: "Item not found"

        })
    }
    res.status(200).json({
        success: true,
        data: item
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
        expiryDate: req.body.expiryDate
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
        itemToUpdate.supplier = req.body.supplier
    }
    if (req.body.expiryDate !== undefined) {
        itemToUpdate.expiryDate = req.body.expiryDate
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
    res.status(200).json({
        success: true,
        data: deletedItem
    })
}

// const filterItem=(req,res)=>{

//     const item=inventory.filter(item=>item.)
// }


export {
    getItems,
    singleItem,
    addItems,
    updateItem,
    deleteItem
}