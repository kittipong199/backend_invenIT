const express = require('express');

const db = require('../../DB/index');

const router = express.Router();
router.use(express.json());
const { json } = require('sequelize');
router.use(express.urlencoded({ extended:false }))


// Create Rout
// add new Item

router.post("/create", async (req, res) => {
    const { brand_name,type_name,serial_numbar,item_details ,fixasset,project_name} = req.body;
  
    try{
        db.query(
           `INSERT INTO it_inventory.items_collection
           (
               brand_id,
               type_id,
               serial_no, 
               item_details, 
               fixasset,
               project_id
           ) 
       VALUES
           (
            (SELECT brand_id FROM it_inventory.items_brand_list WHERE brand_name =?),
            (SELECT type_id FROM it_inventory.items_type_list WHERE type_name =?),
               ?,
               ?,
               ?,
            (SELECT project_id FROM it_inventory.project_list WHERE project_name =?)
           );`,
            [ brand_name,type_name,serial_numbar,item_details,fixasset,project_name],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while insert a user into the DB",err);
                    return res.status(400).send();
                }
                return res.status(201).json({ message: "new user successfully"});
            }
        )
    } catch(err){
        console.log(err);
        return res.status(500).send();
  
  
    }
  })




// Update 

router.patch("/update/:id", async (req, res) => {
    const id = req.params.id;
    const { brand_name,type_name,serial_numbar,item_details ,fixasset,project_name} = req.body;
    try{
        db.query(
            `Update it_inventory.items_collection 
            join it_inventory.items_brand_list on items_collection.brand_id = items_brand_list.brand_id
            join it_inventory.items_type_list on items_collection.type_id = items_type_list.type_id
            
            join it_inventory.project_list on items_collection.project_id = project_list.project_id
            
            set 
            
            it_inventory.items_brand_list.brand_name =? ,
            it_inventory.items_type_list.type_name =? ,
            it_inventory.items_collection.serial_no =? ,
            it_inventory.items_collection.item_details =? ,
            it_inventory.items_collection.fixasset =? ,
            it_inventory.project_list.project_name =?''
            
            
            where item_id = ?
                       
            ;`, 
            [brand_name,type_name,serial_numbar,item_details ,fixasset,project_name,id], 
            (err, results, fields) => {
                if (err) {
                    console.log("Error while insert a user into the DB",err);
                    return res.status(400).send();
                }
                return res.status(201).json({message: "Update successfully"});
            }
        )
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }

})







//delete by id

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
   
    try{
        db.query(
            "DELETE FROM items_collection where item_id = ?", [id], 
            (err, results, fields) => {
                if (err) {
                    console.log("Error while insert a user into the DB",err);
                    return res.status(400).send();
                }
                return res.status(201).json({message: "Delete user successfully"});
            }
        )
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }

}
)

module.exports = router;