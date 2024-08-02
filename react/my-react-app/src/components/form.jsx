import { useState } from "react";
function Form() {
  const [name, setName] = useState("");
  const nameChangeHandler = (event) => setName(event.target.value);
  const [quantity, setQuantity] = useState(0);
  const quantityChangeHandler = (event) => setQuantity(event.target.value);
  const [comment, setComment] = useState("");
  const commentChangeHandler = (event) => setComment(event.target.value);
  const [payment, setPayment] = useState("");
  const paymentChangeHandler = (event) => setPayment(event.target.value);
  const [shipping, setShipping] = useState("");
  const shippingChangeHandler = (event) => setShipping(event.target.value);
  return (
    <form>
      <input type="text" value={name} onChange={nameChangeHandler} />
      <p>Name: {name}</p>
      <input type="number" value={quantity} onChange={quantityChangeHandler} />
      <p>Quantity: {quantity}</p>
      <textarea
        placeholder="Enter Delivery Instructions"
        value={comment}
        onChange={commentChangeHandler}></textarea>
      <p>Comment: {comment}</p>
      <select value={payment} onChange={paymentChangeHandler}>
        <option value="" disabled hidden>
          Select an option
        </option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment Method: {payment}</p>
      <label htmlFor="pick">Pick Up</label>
      <input
        type="radio"
        id="pick"
        value="Pick Up"
        checked={shipping === "Pick Up"}
        onChange={shippingChangeHandler}
      />
      <label htmlFor="deliv">Delivery</label>
      <input
        type="radio"
        id="deliv"
        value="Delivery"
        checked={shipping === "Delivery"}
        onChange={shippingChangeHandler}
      />
      <p>Shipping: {shipping}</p>
    </form>
  );
}

export default Form;
