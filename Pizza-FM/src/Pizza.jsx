const Pizza = (props) => {
  return (
    <div className="pizza">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <img src={props.image} alt={props.title} />
    </div>
  );
};

export default Pizza;
