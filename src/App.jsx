// import { useState } from "react";

import Faqproject from "./components/Faqproject/Faqproject";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Quoutesgenerator from "./components/Quotesgenerator/Quoutesgenerator";
import Shoopinglist from "./components/Shoppinglist/Shoopinglist";
import Videoplayer from "./components/Videoplayer/Videoplayer";


const App = () => {
  return (
    <>
      <h1 >Reactjs Basic Projectjs</h1>
      <ImageSlider />
      <Faqproject />
      <Quoutesgenerator />
      <Shoopinglist/>
      <Videoplayer/>
    </>
  );
};

export default App;
