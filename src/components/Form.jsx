import { fetchMovie } from "./store/MovieStore";

const Form = () => {
  const handleChangeValue = (e) => {
    fetchMovie(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChangeValue} id="value" />
    </div>
  );
};

export default Form;
