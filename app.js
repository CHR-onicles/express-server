const express = require("express");

const app = express();

const products = [
  {
    id: 1,
    name: "Samsung S21",
    category: "Electronics",
    price: 9900,
    currency: "USD",
    image: "",
    stars: 4,
    review: "Crazy cool",
  },
  {
    id: 1,
    name: "Brown Bread",
    category: "Food",
    price: 10,
    currency: "USD",
    image: "",
    stars: 3,
    review: "Tasty good",
  },
];

const customers = [
    {
        id: 1,
        name: "Kofi Babone",
        gender: "M",
    },
    {
        id: 2,
        name: "Ama Serwaa",
        gender: "F",
    },
    {
        id: 3,
        name: "Kojo Laoshoa",
        gender: "M",
    },
]

app.get("/", (req, res) => {
  // res.send('Hello world')
  res.json({ message: "Hello comrades" });
});

app.get('/products', (req, res) => {
    res.json(products);
})

app.get('/customers', (req, res) => {
    res.json(customers);
})

app.get('/customers/:customerID', (req, res) => {
    const {customerID } = req.params;
    console.log(`Customer id is: ${customerID}`);
    res.json(customers[customerID - 1]);
})

app.listen(5555, () => console.log("Server is running..."));
