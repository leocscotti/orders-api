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

  // transformação do JSON recebido
  const mappedOrder = {
    orderId: data.numeroPedido.split("-")[0], // remove o -01
    value: data.valorTotal,
    creationDate: new Date(data.dataCriacao),

    items: data.items.map(item => ({
      productId: Number(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  };

  const order = new Order(mappedOrder);

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