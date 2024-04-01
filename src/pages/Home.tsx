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
      <h2 className="text-center py-10 text-[80px] lg:text-[125.85px] font-bold">
        Pricing table pop-up
      </h2>
      <div className="flex justify-center items-center mx-auto theme pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px]">
          {pricing.map((tableData: TPricingData) => (
            <PriceCard key={tableData.id} tableData={tableData}></PriceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
