const express = require("express");

require("./config/db");

const Product = require("./models/product_schema.js");

const app = express();

app.use(express.json()); //this will convey the express to read the body in the json format

app.get("/", (req, res) => {
  res.status(200);
  res.json({
    isSuccess: true,
    message: "Server is Running!.........",
    data: {},
  });
});

app.post("/api/v1/products", async (req, res) => {
  try {
    const data = req.body;
    const newProduct = await Product.create(data);
    res.status(201);
    res.json({
      isSuccess: true,
      message: "Product Created",
      data: {
        Product: newProduct,
      },
    });
  } catch (err) {
    console.log("<==== Error  Occured in Posting the Products ❌ ===>");
    console.log(err.message);
    if (err.name === "ValidationError" || err.code=="11000") {
        res.status(400)
        res.json({
            isSuccess: false,
            message: err.message,
            data: {},
        });
    } else {
        res.status(500)
      res.json({
        isSuccess: false,
        message: "Internal Server Error",
        data: {
          errMessage: err.message,
        },
      });
    }
  }
});

app.listen(2900, () => {
  console.log("<======== Server Started ========>");
});
