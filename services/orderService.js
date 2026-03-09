const Order = require("../models/Order");

/**
 * Faz o mapping do JSON recebido para o formato do banco
 */
function mapOrder(data) {
  return {
    orderId: data.numeroPedido,
    value: data.valorTotal,
    creationDate: data.dataCriacao,
    items: data.items.map(item => ({
      productId: parseInt(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  };
}

/**
 * Criar pedido
 */
exports.createOrder = async (data) => {
  const mapped = mapOrder(data);

  const order = new Order(mapped);

  return await order.save();
};

/**
 * Buscar pedido por ID
 */
exports.getOrder = async (id) => {
  return await Order.findOne({ orderId: id });
};

/**
 * Listar pedidos
 */
exports.listOrders = async () => {
  return await Order.find();
};

/**
 * Atualizar pedido
 */
exports.updateOrder = async (id, data) => {
  const mapped = mapOrder(data);

  return await Order.findOneAndUpdate(
    { orderId: id },
    mapped,
    { new: true }
  );
};

/**
 * Deletar pedido
 */
exports.deleteOrder = async (id) => {
  return await Order.deleteOne({ orderId: id });
};