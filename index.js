const express = require("express");
const sql = require("./db");
const cors = require('cors');

// Application
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM books WHERE sold = false;`;
    if (result) {
      res.json({ books: result });
    }
  } catch (e) {
    console.log(e.message);
    res.json({ err: e.message });
  }
});

// Add Book
app.post("/add", async (req, res) => {
  try {
    const { name, desc } = req.body;
    const result = await sql`INSERT INTO books (book_name,book_desc,sold) VALUES (${name},${desc},false);`;
    if (result) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (e) {
    console.log(e.message);
    res.json({ err: e.message });
  }
});

// sell Book
app.post("/sell", async (req, res) => {
  try {
    const { customer_name, book_name, book_id, phone } = req.body;
    const result = await sql`INSERT INTO customers (book_id,book_name,customer_name,phone_no) VALUES (${book_id},${book_name},${customer_name},${phone});`;
    const done = await sql`UPDATE books SET sold = true WHERE id = ${book_id};`;
    if (result && done) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (e) {
    console.log(e.message);
    res.json({ err: e.message });
  }
});

// Get All customers
app.get("/customers", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM customers;`;
    if (result) {
      res.json({ customers: result });
    } else {
      res.json({ success: false });
    }
  } catch (e) {
    console.log(e.message);
    res.json({ err: e.message });
  }
});

// listening on port 5000
app.listen(process.env.PORT || 5000, () => console.log("Server running..."));
