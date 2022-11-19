const express = require('express')

const create_item = require('./create_item')

const router = express.Router()






// Create Rout

router.post("/create", async (req, res) => {
  const { serial_numbar,hw_name, brand_name,fixasset,hw_details} = req.body;

  try{
      connection.query(
         `INSERT INTO items_collection
         (
             brand_id,
             serial_no, 
             hw_details, 
             hw_fixasset
             
         ) 
     VALUES
         (
             (SELECT brand_id FROM it_inventory.items_brand_list WHERE brand_name = '?'),
             
             '?',
             '?',
             '?'
             
         );`,
          [serial_numbar,hw_name, brand_name,fixasset,hw_details],
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


// Read data
router.get("/read", async (req, res) => {
  try{
      connection.query(
          "SELECT * FROM user",
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
// Update

router.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const newPassword = req.body.newPassword;
  try{
      connection.query(
          "UPDATE user SET password = ? WHERE id = ?", [newPassword,id],
          (err, results, fields) => {
              if (err) {
                  console.log("Error while insert a user into the DB",err);
                  return res.status(400).send();
              }
              return res.status(201).json({message: "Cheange password successfully"});
          }
      )
  } catch(err){
      console.log(err);
      return res.status(500).send();
  }

})

//delete

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try{
      connection.query(
          "DELETE FROM user where id = ?", [id],
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



module.express = router
