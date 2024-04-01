import { useEffect, useState } from "react";

import PriceCard from "../component/priceCard/PriceCard";
import { TPricingData } from "../type/type";

const Home = () => {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    fetch("pricing.json")
      .then((res) => res.json())
      .then((data) => setPricing(data));
  }, []);
  return (
    <div className="theme h-screen">
      <h2 className="text-center py-10">Card Pricing POP Up</h2>
      <div className="flex justify-center items-center w-[1085px] mx-auto">
        <div className="flex gap-[25px]">
          {pricing.map((tableData: TPricingData) => (
            <PriceCard key={tableData.id} tableData={tableData}></PriceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
