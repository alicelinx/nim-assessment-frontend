import React from "react";
import styles from "./styles/OrderConfirmation.module.css";

function OrderConfirmation({ order }) {
  return (
    <>
      <div className={styles.orderConfirmation}>
        <div>
          <h3>Thank you for your order</h3>

          <p>
            <b>Order ID:</b> {order.id}
          </p>
          <p>
            <b>Name:</b> {order.name}
          </p>
          <p>
            <b>Address:</b> {order.address}
          </p>
        </div>
      </div>

      {order.items.map((item) => (
        <p className={styles.orderItems} key={item.item.id}>
          x{item.quantity}&nbsp;&nbsp;&nbsp;{item.item.name}
          &nbsp;&nbsp;&nbsp;${item.item.price}
        </p>
      ))}
    </>
  );
}

export default OrderConfirmation;
