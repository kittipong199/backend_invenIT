const express = require('express');

const db = require('../../DB/index');

const router = express.Router();



//// get CPU details 

router.get("/cpu/details", async (req, res) => {

    try{
        db.query(
            `SELECT it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name,item_details,items_collection.serial_no 
            FROM it_inventory.items_collection 
            INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
            INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
            
            WHERE items_collection.type_id = 5
                
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



//// get mainboard details 

router.get("/mainboard/details", async (req, res) => {

    try{
        db.query(
            `SELECT it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name,item_details,items_collection.serial_no 
            FROM it_inventory.items_collection 
            INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
            INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
            
            WHERE items_collection.type_id = 4
                
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


//// get PowerSupply  details 

router.get("/power/details", async (req, res) => {

    try{
        db.query(
            `SELECT it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name,item_details,items_collection.serial_no 
            FROM it_inventory.items_collection 
            INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
            INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
            
            WHERE items_collection.type_id = 6
                
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

// get RAM details
router.get("/ram/details", async (req, res) => {

    try{
        db.query(
            `SELECT it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name,item_details,items_collection.serial_no 
            FROM it_inventory.items_collection 
            INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
            INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
            
            WHERE items_collection.type_id = 1
                
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

// get SSD and HD details
router.get("/storage/details", async (req, res) => {

    try{
        db.query(
            `SELECT it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name,item_details,items_collection.serial_no FROM it_inventory.items_collection 
            INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
            INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
            WHERE items_collection.type_id= 2 or items_collection.type_id=3
                
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


router.get("/pcList", async (req, res) => {

    try{
        db.query(
            `SELECT * FROM pc_list
           
                
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
