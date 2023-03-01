const express = require('express');
const { json } = require('sequelize');

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


router.get("/all", async (req, res) => {
  

    try{
        db.query(
            `	
            SELECT 
            pc_id,
            pc_hostname,
            pc_details,
            pc_fixasset,
            serial_num,is_aio,
            dongle_id,
            status_list.status_name,
            project_list.project_name,
            location_id,
            io_card,
            ram_slot,
            pc_size,
            lan_card,
            cpu_collection.item_details AS cpu_details,
            mainboard_collection.item_details AS mainboard_details,
            powersupply_collection.item_details AS powersupply_details,
            ram_collection.item_details AS ram_details,
            storage_collection.item_details AS storage_details
        
        FROM it_inventory.pc_list
        
        LEFT JOIN it_inventory.project_list ON pc_list.project_id = project_list.project_id
        LEFT JOIN it_inventory.status_list ON pc_list.status_id = status_list.status_id 
        LEFT JOIN it_inventory.items_collection AS cpu_collection ON pc_list.type_cpu = cpu_collection.item_id 
        LEFT JOIN it_inventory.items_collection AS mainboard_collection ON pc_list.type_mainboard = mainboard_collection.item_id
        LEFT JOIN it_inventory.items_collection AS powersupply_collection ON pc_list.type_power = powersupply_collection.item_id
        LEFT JOIN it_inventory.items_collection AS ram_collection ON pc_list.type_ram = ram_collection.item_id
        LEFT JOIN it_inventory.items_collection AS storage_collection ON pc_list.type_storage = storage_collection.item_id
        
        `
            , 

            
            (err, results, fields) => {
                if (err) {
                    console.log("Error while insert a user into the DB",err);
                    console.log(json(console.error()));
                    return res.status(400).json(err);
                }
                return res.status(201).json(results);
            }
        )
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})


router.get("/:pc_id", async (req, res) => {
  
    const getId = req.params.pc_id;
    try{
        db.query(
            `	
            SELECT 
            pc_id,
            pc_hostname,
            pc_details,
            pc_fixasset,
            serial_num,is_aio,
            dongle_id,
            status_list.status_name,
            project_list.project_name,
            location_id,
            io_card,
            ram_slot,
            pc_size,
            lan_card,
            cpu_collection.item_details AS cpu_details,
            mainboard_collection.item_details AS mainboard_details,
            powersupply_collection.item_details AS powersupply_details,
            ram_collection.item_details AS ram_details,
            storage_collection.item_details AS storage_details
        
        FROM it_inventory.pc_list
        
        LEFT JOIN it_inventory.project_list ON pc_list.project_id = project_list.project_id
        LEFT JOIN it_inventory.status_list ON pc_list.status_id = status_list.status_id 
        LEFT JOIN it_inventory.items_collection AS cpu_collection ON pc_list.type_cpu = cpu_collection.item_id 
        LEFT JOIN it_inventory.items_collection AS mainboard_collection ON pc_list.type_mainboard = mainboard_collection.item_id
        LEFT JOIN it_inventory.items_collection AS powersupply_collection ON pc_list.type_power = powersupply_collection.item_id
        LEFT JOIN it_inventory.items_collection AS ram_collection ON pc_list.type_ram = ram_collection.item_id
        LEFT JOIN it_inventory.items_collection AS storage_collection ON pc_list.type_storage = storage_collection.item_id
        
        WHERE it_inventory.pc_list.pc_id = ${getId}
        `
            , 

            
            (err, results, fields) => {
                if (err) {
                    console.log("Error while insert a user into the DB",err);
                    console.log(json(console.error()));
                    return res.status(400).json(err);
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
