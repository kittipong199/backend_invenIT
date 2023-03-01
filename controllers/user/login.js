const express = require("express");

const db = require("../../DB/index");

const router = express.Router();
router.use(express.json());
const { json } = require("sequelize");
router.use(express.urlencoded({ extended: false }));

const bcrypt = require("bcrypt");
const saltRounds = 5;

var jwt = require("jsonwebtoken");
const secret = "Fullstack-login-2023";
// create New User

router.post("/register", async (req, res) => {
  // Store hash in your password DB.

  const { fullName } = req.body;
  bcrypt.hash(req.body.en, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    try {
      db.query(
        `INSERT INTO it_inventory.users
                    (full_name,
                    employee_number)
                    VALUES(
                        ?,
                        ?
                    );`,
        [fullName, hash],
        (err, results, fields) => {
          if (err) {
            console.log("Error while insert a user into the DB", err);
            return res.status(400).send();
          }
          return res.status(201).json({ message: "new user successfully" });
        }
      );
    } catch (err) {
      console.log(err);
      return res.status(500).send();
    }
  });
});

router.post("/login", async (req, res) => {
  try {
    db.query(
      `SELECT * FROM it_inventory.users
                  WHERE full_name = ?`,
      [req.body.fullName],
      (err, users, fields) => {
        if (err) {
          console.log("Error while insert a user into the DB", err);
          return res.status(400).json({ status: "error" });
        }
        if (users == 0) {
          res.json({ status: "err", message: "no user found" });
          return;
        }
        console.log(users);
        bcrypt.compare(req.body.en, users[0].employee_number, function (err, islogin) {
          if (islogin) {
            console.log({ status: 00, message: "login success" });
            return res.status(200).json({ status: 200, message: "login success" });
          } else {
            return res.json({ status: "error", message: "login fail" });
          }
        });
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

// try{
//     db.query(
//         `SELECT * FROM it_inventory.users
//         WHERE employee_number = ${en}`,

//         (err, results,fields) =>{
//             if (err) {
//                 console.log("Error while insert a user into the DB",err);
//                 return res.status(400).send();
//             }
//             return res.status(201).json(results);
//         }
//     )
// } catch(err){
//     console.log(err);
//     return res.status(500).send();

// }

module.exports = router;
