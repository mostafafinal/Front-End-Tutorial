import "./food.css";
import PropTypes from "prop-types";
function List(props) {
  //   const order = fruits.sort((a, b) => a.calories - b.calories);
  const listItems = props.items.map((item) => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));
  return (
    <ul>
      <h2 className="list-title">{props.category}</h2>
      {listItems}
    </ul>
  );
}
List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
  category: PropTypes.string,
};
List.defaultProps = {
  items: [
    {
      id: 0,
      name: "Fruit Name",
      calories: "Number of Calories",
    },
  ],
};

export default List;
