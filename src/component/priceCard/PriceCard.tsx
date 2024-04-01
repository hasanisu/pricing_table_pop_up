import { FaDollarSign } from "react-icons/fa";
import "./PriceCard.css";

const PriceCard = ({ tableData }: any) => {
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
      <div className="card-top flex justify-center items-center text-center">
        <div>
          <h2 className="text-[29.22px] text-white">{pricePlan}</h2>
          <div className="text-white">
            {price ? (
              <div className="flex justify-start items-start">
                <p>
                  <FaDollarSign className="w-[13.28px] h-[51.79px] -mt-2 " />
                </p>
                <h4 className="text-[45.15px] font-medium pl-[6.64px]">
                  {price}
                </h4>
              </div>
            ) : (
              ""
            )}
          </div>
          <p className="text-[13.28px] text-white">{timing}</p>
        </div>
      </div>

      <div className="bg-white feacture-content flex justify-center items-center">
        <div className="features-sec mt-6 mx-auto">
          <div className="features">
            <p className="sec-1">{features1}</p>
            <p className="sec-2">{features2}</p>
            <p className="sec-3">{features3}</p>
            <p className="sec-4">{features4}</p>
            <p className="sec-5">{features5}</p>
          </div>
          <div className="mt-6">
            <button className="btn">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
