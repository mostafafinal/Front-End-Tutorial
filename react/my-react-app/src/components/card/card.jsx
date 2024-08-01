import "../card/card.css";
import PropTypes from "prop-types";
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

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};
Card.defaultProps = {
  image: "No Image",
  title: "Card Title",
  content: "Card Content",
};
export default Card;
