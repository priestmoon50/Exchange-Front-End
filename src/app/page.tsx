// src/app/page.tsx

import React from "react";
import PriceList from "./components/PriceList";
import Description from "./components/Description";


export default function Home() {
  return (
    <div>
      <PriceList />
      <Description />
   
    </div>
  );
}
