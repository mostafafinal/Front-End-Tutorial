function Ouch() {
  let count = 0;
  let name = "Ouch😒";

  const clickHandler = (e) => {
    if (count < 3) {
      count++;
      e.target.textContent = name;
    } else {
      name = "Stop🙂";
      e.target.textContent = name;
    }
  };
  return <button onClick={(e) => clickHandler(e)}>Click Me🙂</button>;
}
export default Ouch;
