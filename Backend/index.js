const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "ecomercewebsite"
})
con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
})

app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const MobileNo= req.body.MobileNo;
    const Address=req.body.Address;
    const total=req.body.total;
    const title=req.body.title;

    con.query("INSERT INTO ecomercedetail (Name,Email, MobileNo , Address, Price,Products) VALUES (?, ?, ?,?,?,?)", 
    [username,email,MobileNo, Address,total,title], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})

/*
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    const query = 'SELECT * FROM signupdata WHERE Name = ? AND Password = ?';
    connection.query(query, [username, password], (error, results) => {
      if (error){
        res.send({err: err})
      };
  
      if (results.length > 0) {
        res.send({results});
      } else {
        res.send({message :'Incorrect email or password'});
      }
    });
  });
*/
 /*
  app.post('/Order', (req, res) => {
    const { name, email, mobileNo , address } = req.body;
    const query = `INSERT INTO orders (Name, Email, MobileNum , Address) VALUES ('${name}', '${email}', '${mobileNo}', '${address}')`;

    connection.query(query, (error, results) => {
      if (error) throw error;
      else{
      res.send({ message: 'User created successfully' });
      }
    });
  });
  */

app.listen(3001, () => {
    console.log("running backend server");
})
