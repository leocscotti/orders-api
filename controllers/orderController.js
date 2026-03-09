const service = require("../services/orderService");

/**
 * Criar pedido
 */
exports.createOrder = async (req, res) => {
  try {
    const order = await service.createOrder(req.body);

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Buscar pedido por ID
 */
exports.getOrder = async (req, res) => {
  try {
    const order = await service.getOrder(req.params.id);

    if (!order)
      return res.status(404).json({ message: "Pedido não encontrado" });

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Listar pedidos
 */
exports.listOrders = async (req, res) => {
  try {
    const orders = await service.listOrders();

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Atualizar pedido
 */
exports.updateOrder = async (req, res) => {
  try {
    const order = await service.updateOrder(
      req.params.id,
      req.body
    );

    if (!order)
      return res.status(404).json({ message: "Pedido não encontrado" });

    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Deletar pedido
 */
exports.deleteOrder = async (req, res) => {
  try {
    await service.deleteOrder(req.params.id);

    res.json({ message: "Pedido removido" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};