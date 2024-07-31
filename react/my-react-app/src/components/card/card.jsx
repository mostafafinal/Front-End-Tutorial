import "../card/card.css";
function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.image} alt="card image" />
        <div className="content">
          <div className="title">{props.title}</div>
          <div className="text">{props.content}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
