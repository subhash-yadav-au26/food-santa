const express = require('express')
const router = express.Router()
const { createOrder, getOneOrder, getLoggedInOrders, adminGetAllOrders, adminUpdateOrder, adminDeleteOrder } = require('../controllers/order.controller');
const { isLoggedIn, customRole } = require('../middlewares/user')

router.route('/order/create').post(isLoggedIn, createOrder);

router.route('/order/:id').get(isLoggedIn, getOneOrder);

router.route('/myorder').get(isLoggedIn, getLoggedInOrders);

// admin route
router.route('/admin/orders').get(isLoggedIn, customRole('admin'), adminGetAllOrders);
router.route('/admin/order/:id').put(isLoggedIn, customRole('admin'), adminUpdateOrder);
router.route('/admin/order/:id').delete(isLoggedIn, customRole('admin'), adminDeleteOrder);

module.exports = router