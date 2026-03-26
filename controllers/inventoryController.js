import inventory from "../model/inventoryData.js"
export const getItems=(req,res)=>{

    res.status(200).json({
        success:true,
        data:inventory
        
    })


}
