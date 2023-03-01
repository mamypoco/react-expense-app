import "./Card.css";

const Card = (props) => {
   const classes = "card " + props.className;
   //className will be card, and add the className css from the Children component.
   return <div className={classes}>{props.children}</div>;
   //children props will be availble when used with wrappers. The content between the Card component is the children.
};

export default Card;
