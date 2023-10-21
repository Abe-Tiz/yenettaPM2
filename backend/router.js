const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;

//rout for display all products
app.get("/", (req, res) => {
  const sql = "SELECT * from product";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//rout for display all products
app.get("/availableProducts", (req, res) => {
  const sql = "SELECT * from product WHERE available = true";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//rout for display unavailable products
app.get("/unavailableProducts", (req, res) => {
  const sql = "SELECT * from product WHERE available = false";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//rout for display available products
// app.get("/availableProducts", (req, res) => {
//   const sql = "SELECT * from product WHERE available = true";

//   db.query(sql, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

//rout for update availablity
app.put("/updateProductAvailability/:productId", (req, res) => {
  const productId = req.params.productId;
  const updatedProduct = req.body;

  //update quantity whene in out of stock
  if (!updatedProduct.available) {
    updatedProduct.quantity = 0;
  } else {
    if (updatedProduct.quantity === 0) {
      updatedProduct.quantity = updatedProduct.quantity + 1;
    }
  }

  db.query(
    "UPDATE product SET quantity = ?, available = ? WHERE ID = ?",
    [updatedProduct.quantity, updatedProduct.available, productId],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Error updating product availability" });
      } else {
        res.json({ message: "Product availability updated successfully" });
      }
    }
  );
});

//route for create product
app.post("/addProduct", (req, res) => {
  const sql =
    "INSERT INTO product (`name`, `description`,`price`,`quantity`,`available`) VALUES(?)";

  const values = [
    req.body.name,
    req.body.description,
    req.body.price,
    req.body.quantity,
    (available = true),
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//update products
app.put("/updateProduct/:id", (req, res) => {
  const sql =
    "update product set `name` = ?,  `description` = ? ,`price` = ? , `quantity` = ?  where ID = ?";
  const values = [
    req.body.name,
    req.body.description,
    req.body.price,
    req.body.quantity,
  ];
  const id = req.params.id;

  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//route for delete product
app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM product WHERE ID = ?";

  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Server is Started on Port ${port}.`);
});
