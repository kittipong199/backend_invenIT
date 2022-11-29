const express  = require('express');
const mysql = require('mysql');

const cors = require('cors');

const app = express();

app.use(cors());

var  updateId = require('./Controllers/create_item');
const { json } = require('sequelize');

app.use(express.json());


const connection = mysql.createConnection({
    host: '',
    user: 'root',
    password: ';',
    database:'it_inventory',
    port: '3306'
});

connection.connect((err) => {
    if (err){
        console.log('Error connect to DB is',err)
    }
    console.log('Mysql successfully connected');
})




//// get all Brand Table

app.get("/getbrand", async (req, res) => {

    try{
        connection.query(
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

app.get("/gettype", async (req, res) => {

    try{
        connection.query(
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

app.get("/gettype/count_type", async (req, res) => {

    try{
        connection.query(
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
////////////////////////////////////////////////////////////////////////////////

//// get all Project Table

app.get("/getproject", async (req, res) => {
   
  
    
    try{
        connection.query(
            `SELECT * FROM project_list
            
                
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
// Read get all data
app.get("/getall", async (req, res) => {

    try{
        connection.query(
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


// Read get by id
app.get("/get/:id", async (req, res) => {

    const getId = req.params.id;

    try{
        connection.query(
            `SELECT it_inventory.items_collection.item_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name,item_details,serial_no
            FROM (((it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id)
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id)
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id)  
            WHERE item_id = ${getId}
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

app.get("/getProjectID/:id", async (req, res) => {

    const typeName = req.project_name;

    try{
        connection.query(
            `SELECT it_inventory.items_collection.item_id, it_inventory.items_brand_list.brand_name, it_inventory.items_type_list.type_name, it_inventory.project_list.project_name,item_details,serial_no
            FROM (((it_inventory.items_collection
                INNER JOIN it_inventory.items_brand_list ON it_inventory.items_collection.brand_id = it_inventory.items_brand_list.brand_id)
                INNER JOIN it_inventory.items_type_list ON it_inventory.items_collection.type_id = it_inventory.items_type_list.type_id)
                INNER JOIN it_inventory.project_list ON it_inventory.items_collection.project_id = it_inventory.project_list.project_id)  
            WHERE project_name = ${typeName}
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
// Create Rout

app.post("/create", async (req, res) => {
    const { brand_name,type_name,serial_numbar,item_details ,fixasset,project_name} = req.body;
  
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

app.patch("/update/:id", async (req, res) => {
    const id = req.params.id;
    const { brand_name,type_name,serial_numbar,item_details ,fixasset,project_name} = req.body;
    try{
        connection.query(
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

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
   
    try{
        connection.query(
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
app.listen(3000, () => console.log('Server is running on port 3000'));
