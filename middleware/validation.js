const validateItem = (req, res, next) => {
  let { name, quantity, category, price, supplier } = req.body

  const textRegex = /^[A-Za-z0-9\s&.-]+$/

  if (req.method === "POST" || req.method === "PUT") {

    if (!name || name.trim() === "") {
      return res.status(400).json({ 
        message: "Name is required"
     })
    }

    if (quantity == null || quantity === "" || isNaN(quantity)) {
      return res.status(400).json({
         message: "Quantity is required and must be number" })
    }

    if (!category || category.trim() === "") {
      return res.status(400).json({
         message: "Category is required"
         })
    }

    if (price == null || price === "" || isNaN(price)) {
      return res.status(400).json({ 
        message: "Price is required and must be number" 
    });
    }

    if (!supplier || supplier.trim() === "") {
      return res.status(400).json({ 
        message: "Supplier is required" 
        
      })
    }
  }

  if (req.method === "PATCH") {

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "No fields provided for update"
      })
    }

    if (name !== undefined) {
      if (!name || name.trim() === "") {
        return res.status(400).json({ 
            message: "Invalid name" 
        })
      }
    }

    if (quantity !== undefined) {
      if (quantity === "" || isNaN(quantity)) {
        return res.status(400).json({ 
            message: "Invalid quantity"
         })
      }
    }

    if (category !== undefined) {
      if (!category || category.trim() === "") {
        return res.status(400).json({ 
            message: "Invalid category"

         })
      }
    }

    if (price !== undefined) {
      if (price === "" || isNaN(price)) {
        return res.status(400).json({
             message: "Invalid price" 
            })
      }
    }

    if (supplier !== undefined) {
      if (!supplier || supplier.trim() === "") {
        return res.status(400).json({
             message: "Invalid supplier" 
            })
      }
    }
  }


  const cleanedData = {}

  if (name !== undefined) {
    name = name.trim();
    if (!textRegex.test(name)) {
      return res.status(400).json({ 
        message: "Name contains invalid characters" 
    })
    }
    cleanedData.name = name
  }

  if (quantity !== undefined) {
    quantity = Number(quantity)
    if (quantity < 0) {
      return res.status(400).json({ 
        message: "Quantity cannot be negative" 

      })
    }
    cleanedData.quantity = quantity
  }

  if (category !== undefined) {
    category = category.trim();
    if (!textRegex.test(category)) {
      return res.status(400).json({ 
        message: "Category contains invalid characters" 
    });
    }
    cleanedData.category = category
  }

  if (price !== undefined) {
    price = Number(price);
    if (price < 0) {
      return res.status(400).json({
         message: "Price cannot be negative"
         });
    }
    cleanedData.price = price
  }

  if (supplier !== undefined) {
    supplier = supplier.trim()
    if (!textRegex.test(supplier)) {
      return res.status(400).json({ 
        message: "Supplier contains invalid characters" 
    });
    }
    cleanedData.supplier = supplier
  }

  delete req.body.id

  req.body = cleanedData

  next()
}

export default validateItem
