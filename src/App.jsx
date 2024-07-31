import { priceCardsData } from "./data.js";
import PriceCard from "./PriceCard";
import "./App.css";

const App = () => {
  return (
    <div className="App m-5">
      <div className="price-cards-container bg-primary">
        {priceCardsData.map((card, index) => (
          <PriceCard
            key={index}
            type={card.type}
            price={card.price}
            features={card.features}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
