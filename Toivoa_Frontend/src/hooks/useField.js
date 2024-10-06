
const useField = (type, value, setValue) => {

  const onChange = (event) => setValue(event.target.value);

  return {
    type,
    value,
    onChange,
  };
};

export default useField;