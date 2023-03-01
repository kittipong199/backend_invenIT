const express = require('express');
const { json } = require('sequelize');
const db = require('../../DB/index');

const router = express.Router();


///// C3 MainBoard//////////////////////////////////////////////

router.get("/Brand/MainBoard/status/total", async (req, res) => {

    const projectName = req.item_details;

    try{
        db.query(
            `SELECT items_collection.item_id,it_inventory.items_type_list.type_id,it_inventory.items_brand_list.brand_id,it_inventory.project_list.project_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, count(*) as counts
            FROM it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id  
       Where type_name = "C3MainBoard" 
           
           
               
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

router.get("/Brand/MainBoard/status/install", async (req, res) => {

    const projectName = req.item_details;

    try{
        db.query(
            `SELECT items_collection.item_id,it_inventory.items_type_list.type_id,it_inventory.items_brand_list.brand_id,it_inventory.project_list.project_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, count(*) as counts
            FROM it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id  
       Where type_name = "C3MainBoard" And items_collection.item_details = "Install"
           
           
               
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


router.get("/Brand/MainBoard/status/spare", async (req, res) => {

    const projectName = req.item_details;

    try{
        db.query(
            `SELECT items_collection.item_id,it_inventory.items_type_list.type_id,it_inventory.items_brand_list.brand_id,it_inventory.project_list.project_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, count(*) as counts
            FROM it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id  
       Where type_name = "C3MainBoard" And items_collection.item_details = "spare"
           
           
               
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


// CGM Board /////////////////////////////////////////////////////////////////

router.get("/Brand/CGM/status/total", async (req, res) => {

    const projectName = req.item_details;

    try{
        db.query(
            `SELECT items_collection.item_id,it_inventory.items_type_list.type_id,it_inventory.items_brand_list.brand_id,it_inventory.project_list.project_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, count(*) as counts
            FROM it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id  
       Where type_name = "CGM" 
           
           
               
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

router.get("/Brand/CGM/status/install", async (req, res) => {

    const projectName = req.item_details;

    try{
        db.query(
            `SELECT items_collection.item_id,it_inventory.items_type_list.type_id,it_inventory.items_brand_list.brand_id,it_inventory.project_list.project_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, count(*) as counts
            FROM it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id  
       Where type_name = "CGM" And items_collection.item_details = "Install"
           
           
               
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


router.get("/Brand/CGM/status/spare", async (req, res) => {

    const projectName = req.item_details;

    try{
        db.query(
            `SELECT items_collection.item_id,it_inventory.items_type_list.type_id,it_inventory.items_brand_list.brand_id,it_inventory.project_list.project_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, count(*) as counts
            FROM it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id  
       Where type_name = "CGM" And items_collection.item_details = "spare"
           
           
               
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


//////////////// CGM Terminal ////////////////////////////////

router.get("/Brand/CGM_Terminal/status/total", async (req, res) => {

    const projectName = req.item_details;

    try{
        db.query(
            `SELECT items_collection.item_id,it_inventory.items_type_list.type_id,it_inventory.items_brand_list.brand_id,it_inventory.project_list.project_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, count(*) as counts
            FROM it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id  
       Where type_name = "CGM Terminal" 
           
           
               
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

router.get("/Brand/CGM_Terminal/status/install", async (req, res) => {

    const projectName = req.item_details;

    try{
        db.query(
            `SELECT items_collection.item_id,it_inventory.items_type_list.type_id,it_inventory.items_brand_list.brand_id,it_inventory.project_list.project_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, count(*) as counts
            FROM it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id  
       Where type_name = "CGM Terminal" And items_collection.item_details = "Install"
           
           
               
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


router.get("/Brand/CGM_Terminal/status/spare", async (req, res) => {

    const projectName = req.item_details;

    try{
        db.query(
            `SELECT items_collection.item_id,it_inventory.items_type_list.type_id,it_inventory.items_brand_list.brand_id,it_inventory.project_list.project_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, count(*) as counts
            FROM it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id  
       Where type_name = "CGM Terminal" And items_collection.item_details = "spare"
           
           
               
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



//////////////// LCD moniter ////////////////////////////////

router.get("/Brand/LCD_Moniter/status/total", async (req, res) => {

    const projectName = req.item_details;

    try{
        db.query(
            `SELECT items_collection.item_id,it_inventory.items_type_list.type_id,it_inventory.items_brand_list.brand_id,it_inventory.project_list.project_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, count(*) as counts
            FROM it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id  
       Where type_name = "LCD_Monitor" 

               
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

router.get("/Brand/LCD_Moniter/status/install", async (req, res) => {

    const projectName = req.item_details;

    try{
        db.query(
            `SELECT items_collection.item_id,it_inventory.items_type_list.type_id,it_inventory.items_brand_list.brand_id,it_inventory.project_list.project_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, count(*) as counts
            FROM it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id  
       Where type_name = "LCD_Monitor" And items_collection.item_details = "Install"

               
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


router.get("/Brand/LCD_Moniter/status/spare", async (req, res) => {

    const projectName = req.item_details;

    try{
        db.query(
            `SELECT items_collection.item_id,it_inventory.items_type_list.type_id,it_inventory.items_brand_list.brand_id,it_inventory.project_list.project_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name, count(*) as counts
            FROM it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id  
       Where type_name = "LCD_Monitor" And items_collection.item_details = "spare"

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