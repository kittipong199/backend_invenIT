const express = require('express');

const db = require('../../DB/index');

const router = express.Router();
router.use(express.json());
const { json } = require('sequelize');
router.use(express.urlencoded({ extended:false }))


// create new PC 

router.post("/create/new/pc", async (req, res) => {
    const { project_name,status_name ,pc_hostname ,fixasset ,is_aio,serial_no,dongle_Id, cpu, mainboard, power,ram_solt,ram,storage,pc_size,io_card,lan_card,pc_details} = req.body;
  
    try{
        db.query(
           `INSERT INTO it_inventory.pc_list
           (
               project_id,
               status_id,
               pc_hostname,
               pc_fixasset,
               is_aio,
               serial_num,
               dongle_id,
               type_cpu,
               type_mainboard ,
               type_power,
               ram_slot,
               type_ram,
               type_storage,
               pc_size,
               io_card,
               lan_card,
               pc_details
           ) 
       VALUES
           (
            (SELECT project_id FROM it_inventory.project_list WHERE project_name =?),
            (SELECT status_id FROM it_inventory.status_list WHERE status_name =?),
            ?,
            ?,
            ?,
            ?,
            ?,
            (SELECT item_id FROM it_inventory.items_collection WHERE serial_no =?),
            (SELECT item_id FROM it_inventory.items_collection WHERE serial_no =?),
            (SELECT item_id FROM it_inventory.items_collection WHERE serial_no =?),
            ?,
            (SELECT item_id FROM it_inventory.items_collection WHERE serial_no =?),
            (SELECT item_id FROM it_inventory.items_collection WHERE serial_no =?),
            ?,
            ?,
            ?,
            ?
            
           );`,
            [ project_name,status_name ,pc_hostname ,fixasset ,is_aio,serial_no,dongle_Id, cpu, mainboard, power,ram_solt,ram,storage,pc_size,io_card,lan_card,pc_details],
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


  module.exports = router;