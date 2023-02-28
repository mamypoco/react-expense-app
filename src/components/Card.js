import "./Card.css";

function Card(props) {
   const classes = "card " + props.className;
   //className will be card, and add the className css info as what Children has?
   return <div className={classes}>{props.children}</div>;
   //children props will be availble when used with wrappers. The content between the Card component is the children.
}

export default Card;
