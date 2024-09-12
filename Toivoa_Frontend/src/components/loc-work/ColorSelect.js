

const ColorSelect = (props) => {
    return(
        <label key={props.index} className="color-radio">
              <input
                type="radio"
                value={props.name}
                // checked={selectedColor === props.name}
                // onChange={handleColorSelect}
                name="radio"
              />
              <span
                className="color-swatch"
                style={{ backgroundColor: props.hex }}
              ></span>
              {props.name}
        </label>

    )
}

export default ColorSelect