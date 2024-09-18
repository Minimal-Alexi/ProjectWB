const ColorSelect = (props) => {
  return (
    <label key={props.index} className="color-radio">
      <input type="radio" value={props.name} name="radio" />
      <span className="color-swatch"></span>
      {props.name}
    </label>
  );
};

export default ColorSelect;
