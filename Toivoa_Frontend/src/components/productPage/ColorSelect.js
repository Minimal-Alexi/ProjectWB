const ColorSelect = (props) => {
  //console.log(props);
  return (
    <label key={props.index} className="color-radio">
      <input type="radio" value={props.name} name="radio" />
      <span
        className="color-swatch"
        style={{
          backgroundColor: props.hex,
          display: 'inline-block',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          marginRight: '8px',
          border: '1px solid #000'
        }}
      ></span>
    </label>
  );
};

export default ColorSelect;
