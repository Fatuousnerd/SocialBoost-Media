const express = require('express');
const mongoose = require('mongoose');
const Order = require('./models/Order'); // Order schema

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/orders', { useNewUrlParser: true, useUnifiedTopology: true });

// POST route to add new order
app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET route to fetch orders for admin
app.get('/api/orders', async (req, res) => {
  const orders = await Order.find();
  res.status(200).json(orders);
});

app.listen(5000, () => console.log('Server running on port 5000'));
