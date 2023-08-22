import "./Letters.scss";
import PropTypes from "prop-types";

const Letters = ({ letterClass, strArray, idx }) => {
  console.log(strArray);
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

Letters.propTypes = {
  letterClass: PropTypes.string.isRequired,
  strArray: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};

export default Letters;
