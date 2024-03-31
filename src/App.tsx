import "./App.css";
import pricingData from "../public/pricing.json";
import PriceCard from "./component/PriceCard";
import { useState } from "react";

export type TPricingData = {
  id: string;
  pricePlan: string;
  price: string;
  timing: string;
  features1: string;
  features2: string;
  features3: string;
  features4: string;
  features5: string;
};

function App() {
  const [pricing, setPricing] = useState<TPricingData[]>(pricingData);
  console.log(pricing);
  return (
    <div className="theme  h-screen">
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
}

export default App;
