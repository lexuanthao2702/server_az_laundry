const Router = require('express');
const { createPayment, handleVNPayReturn, getOrder, getOrderById, updateConfirmationStatus } = require('../controllers/payment_controller');

const PaymentRouter = Router();

PaymentRouter.post('/create-payment',createPayment)
PaymentRouter.get('/vnpay_return', handleVNPayReturn)
PaymentRouter.get('/get-order', getOrder)
PaymentRouter.get('/get-order-by-id/:_id', getOrderById)
PaymentRouter.post('/update-confirmation-status', updateConfirmationStatus)
module.exports = PaymentRouter;