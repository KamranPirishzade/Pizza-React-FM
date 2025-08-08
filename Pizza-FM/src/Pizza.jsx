const Pizza = (props) => {
  return (
    <div className="pizza">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <img
        src={
          props.image
            ? props.image
            : "https://previews.123rf.com/images/stolenpencil/stolenpencil1603/stolenpencil160300015/55884978-error-404-page-with-a-pizza-vector-illustrated-template.jpg"
        }
        alt={props.title}
      />
    </div>
  );
};

export default Pizza;
