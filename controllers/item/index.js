const express = require('express');

const db = require('../../DB/index');

const router = express.Router();


//// get all Brand Table

router.get("/brand", async (req, res) => {

    try{
        db.query(
            `SELECT * FROM items_brand_list
            
                
            `, 
            (err, results, fields) => {
                if (err) {
                    console.log("Error while insert a user into the DB",err);
                    return res.status(400).send();
                }
                return res.status(201).json(results);
            }
        )
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})
//// get all Type Table

router.get("/type", async (req, res) => {

    try{
        db.query(
            `SELECT *
            FROM items_type_list
                
            `, 
            (err, results, fields) => {
                if (err) {
                    console.log("Error while insert a user into the DB",err);
                    return res.status(400).send();
                }
                return res.status(201).json(results);
            }
        )
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})


/// GET Count by type 

//////// ส่วนนี้ครับ ที่ count type 

router.get("/type/count_type", async (req, res) => {

    try{
        db.query(
            `SELECT items_collection.item_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, count(*) as counts
            FROM it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id  
      
            Group by it_inventory.items_type_list.type_name ,project_name
            `, 
            (err, results, fields) => {
                if (err) {
                    console.log("Error while insert a user into the DB",err);
                    return res.status(400).send();
                }
                return res.status(201).json(results);
            }
        )
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})


// Read get by id
router.get("/get/:type_name", async (req, res) => {

    const getId = req.params.type_name;

    try{
        db.query(
            `SELECT it_inventory.items_collection.item_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name,item_details,serial_no
            FROM (((it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id)
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id)
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id)  
            WHERE type_name = ${getId}
            `, 
            
            (err, results, fields) => {
                if (err) {
                    console.log("Error while insert a user into the DB",err);
                    return res.status(400).send();
                }
                return res.status(201).json(results);
            }
        )
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})

/////////////////// show details where type and project////////////////////////////////////////////////////////////

router.get("/type/item/detals/:type_name", async (req, res) => {

    const TypeName = req.params.type_name;
    const BrandtName = req.params.brand_name;
    const sql = `SELECT items_collection.item_id,it_inventory.items_type_list.type_name,it_inventory.project_list.project_name, it_inventory.items_brand_list.brand_name,serial_no,item_details,fixasset
    FROM (((it_inventory.items_collection
        INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id)
        INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id)
        INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id) 


    where it_inventory.items_type_list.type_name = ${TypeName}`;
    try{
        db.query(
             `SELECT items_collection.item_id, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, it_inventory.items_brand_list.brand_name,serial_no ,item_details,fixasset
             FROM (((it_inventory.items_collection
                 INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id)
                 INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id)
                 INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id) 
            WHERE type_name =  ${TypeName}

             `, 
            (err, results, fields) => {
                if (err) {
                    console.log("Error while insert a user into the DB",err);
                    return res.status(400).send();
                }
                return res.status(201).json(results);
            }
        )
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})




///////////////// get show details where type and project//////////////////////////

/////////////////////// status ///////////////

router.get("/status" , async(req, res) =>{
    
    try{
        db.query(
            `SELECT * FROM status_list`,
                (err,results,fields) =>{
                    if (err) {
                        console.Console.log("Error select:" ,err);
                        return res.status(400).send();

                    }
                    return res.status(201).json(results);
                })
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})

////////////////////////////////////////////////////////////////////////////////

//// get all Project Table

router.get("/project", async (req, res) => {
   
  
    
    try{
        db.query(
            `SELECT * FROM project_list  `, 

            (err, results, fields) => {
                if (err) {
                    console.log("Error while insert a user into the DB",err);
                    return res.status(400).send();
                }
                return res.status(201).json(results);
            }
        )
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})
// Read get all data
router.get("/all", async (req, res) => {

    try{
        db.query(
            `SELECT it_inventory.items_collection.item_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name,item_details,serial_no
            FROM (((it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id)
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id)
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id)  
            `, 
            (err, results, fields) => {
                if (err) {
                    console.log("Error while insert a user into the DB",err);
                    return res.status(400).send();
                }
                return res.status(201).json(results);
            }
        )
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})





// get by type_name

router.get("/getProjectID/:id", async (req, res) => {

    const projectName = req.project_name;

    try{
        db.query(
            `SELECT it_inventory.items_collection.item_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name,item_details,serial_no
            FROM (((it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id)
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id)
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id)  
            WHERE project_name = ${projectName}
            `, 
            
            (err, results, fields) => {
                if (err) {
                    console.log("Error while insert a user into the DB",err);
                    return res.status(400).send();
                }
                return res.status(201).json(results);
            }
        )
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})



module.exports = router;