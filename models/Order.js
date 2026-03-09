const mongoose = require("mongoose");

/**
 * Schema dos itens do pedido
 */
const ItemSchema = new mongoose.Schema({
  productId: Number,
  quantity: Number,
  price: Number
});

/**
 * Schema principal do pedido
 */
const OrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  creationDate: {
    type: Date,
    required: true
  },
  items: [ItemSchema]
});

module.exports = mongoose.model("Order", OrderSchema);