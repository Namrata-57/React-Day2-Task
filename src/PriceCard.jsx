import PropTypes from 'prop-types';
import './PriceCard.css';

const PriceCard = ({ type, price, features }) => {
    const alertMessage= ()=>{
        alert(`Amazing! You have selected the ${type} plan.`) //alert message will be displayed 
    }
  return (
    <div className="price-card bg-light">
      <h6 className="customType">{type}</h6>
      <p className="price">{price}</p>
      <hr className='lighterHr'/>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index} className={feature.isDisabled ? 'disabled-feature' : ''}>
            <i className={feature.isDisabled ? 'bi bi-x' : 'bi bi-check'}></i>{feature.text}</li>
        ))}
      </ul>
      <button onClick={alertMessage}className="buttonStyle btn btn-primary">BUTTON</button>
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
