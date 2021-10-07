/**
 * Evite escrever funções aninhadas.
 */

// ruim 👎
const sendEmailAfterPurchase = (orderId) => {
  getOrder(orderId).then((order) => {
    getCustomer(order.customerId).then((customer) => {
      sendEmail(customer.email, `Some text ${order.number}`).then(() => {
        console.log("Email sent to customer");
      });
    });
  });
};

// bom 😃
const sendEmailAfterPurchase = async (orderId) => {
  const order = await getOrder(orderId);
  const customer = await getCustomer(order.customerId);
  await sendEmail(customer.email, `Some text ${order.number}`);
  console.log("Email sent to customer");
};
