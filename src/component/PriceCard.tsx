import { FaDollarSign } from "react-icons/fa";
import { TPricingData } from "../App";

const PriceCard = ({ tableData }) => {
  const {
    pricePlan,
    price,
    timing,
    features1,
    features2,
    features3,
    features4,
    features5,
  } = tableData;
  return (
    <div className="border contain">
      <div className="card-top text-center">
        <h2 className="text-[29.22px]">{pricePlan}</h2>
        <div>
          {price ? (
            <>
              <p>
                <FaDollarSign className="text-white " />
              </p>
              <h4>{price}</h4>
            </>
          ) : (
            ""
          )}
        </div>
        <p>{timing}</p>
      </div>

      <div className="features-sec mx-auto">
        <div className="features">
          <p className="sec-1">{features1}</p>
          <p className="sec-2">{features2}</p>
          <p className="sec-3">{features3}</p>
          <p className="sec-4">{features4}</p>
          <p className="sec-5">{features5}</p>
        </div>
        <div className="flex justify-center items-center ">
          <button className="btn">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
