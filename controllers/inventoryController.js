import inventory from "../model/inventoryData.js";

const getItems = (req, res) => {
    let result = inventory

    const { name, category, quantity } = req.query

    const nameQuery = name?.trim().toLowerCase()
    const categoryQuery = category?.trim().toLowerCase()

    if (nameQuery) {
        result = result.filter(item =>
            item.name.toLowerCase().includes(nameQuery)
        )
    }

    if (quantity !== undefined) {
        result = result.filter(item =>
            item.quantity === Number(quantity)
        )
    }

    if (categoryQuery) {
        result = result.filter(item =>
            item.category.toLowerCase() === categoryQuery
        )
    }

    res.status(200).json({
        success: true,
        count: result.length,
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

    const newId = inventory.length
        ? Math.max(...inventory.map(item => item.id)) + 1
        : 1

    const newItem = {
        id: newId,
        ...req.body
    };

    inventory.push(newItem);

    res.status(201).json({
        success: true,
        data: newItem
    })
}

const replaceItem = (req, res) => {
  const id = Number(req.params.id)

  const index = inventory.findIndex(item => item.id === id)

  if (index === -1) {
    return res.status(404).json({ message: "Item not found" })
  }

  inventory[index] = {
    id,
    ...req.body
  };

  res.status(200).json({
    success: true,
    data: inventory[index]
  });
};


const updateItem = (req, res) => {
  const id = Number(req.params.id);

  const item = inventory.find(item => item.id === id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  Object.assign(item, req.body)

  res.status(200).json({
    success: true,
    data: item
  })
}


const deleteItem = (req, res) => {
    const id = Number(req.params.id);

    const index = inventory.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Item not found"
        })
    }

    const deletedItem = inventory.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        message: "Item deleted",
        data: deletedItem
    })
}

export {
    getItems,
    singleItem,
    addItems,
    updateItem,
    replaceItem,
    deleteItem
}
