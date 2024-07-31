import PropTypes from "prop-types";
import "./PriceCard.css";
import { FaCheck } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const PriceCard = ({ type, price, features }) => {
  const alertMessage = () => {
    alert(`Amazing! You have selected the ${type} plan.`);
  };

  return (
    <div className="price-card">
      <h6 className="customType">{type}</h6>
      <p className="price">{price}</p>
      <hr className="lighterHr" />
      <ul className="features">
        {features.map((feature, index) => (
          <li
            key={index}
            className={feature.isDisabled ? "disabled-feature" : ""}
          >
            <span
              className={`check-mark ${
                feature.isDisabled ? "disabled-check" : "bold-check"
              }`}
            >
              {feature.isDisabled ? <FaTimes /> : <FaCheck />}
            </span>
            {feature.text}
          </li>
        ))}
      </ul>
      <button
        onClick={alertMessage}
        className="buttonStyle btn btn-primary py-2"
      >
        BUTTON
      </button>
    </div>
  );
};

PriceCard.propTypes = {
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      isDisabled: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default PriceCard;
