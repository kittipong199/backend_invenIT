const express = require('express')


updateID: () =>{
    const updates_id = ` INSERT INTO items_collection 
        (brand_id,
		type_id,
		serial_no, 
		hw_details, 
		hw_fixasset,)
        VALUES
	    (
		(SELECT brand_id FROM it_inventory.items_brand_list WHERE brand_name = '?'),
        (SELECT type_id FROM it_inventory.items_type_list WHERE hardware_name = '?'),
        '?',
        '?',
        '',
        );
        `
    return updates_id;
}

updateID: async (req, res) => {
    const {  brand_name, type_name, serial_numbar, item_details, fixasset, project_name } = req.body;

    try{
        connection.query(
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
             (SELECT brand_id FROM it_inventory.items_brand_list WHERE brand_name = ?),
             (SELECT type_id FROM it_inventory.items_type_list WHERE type_name = ?),
             ?,
             ?,
             ?,
             (SELECT project_id FROM it_inventory.project_list WHERE project_name = ?)
             
         );`,
            [ brand_name, type_name, serial_numbar, item_details, fixasset, project_name ],
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
}