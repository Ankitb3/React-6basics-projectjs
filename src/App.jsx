// import { useState } from "react";

import Faqproject from "./components/Faqproject/Faqproject";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Quoutesgenerator from "./components/Quotesgenerator/Quoutesgenerator";

// const App = () => {
//   const colors = ["red", "blue", "green", "purple"];
//   const [color, setColor] = useState("green");
//   const [meterValue, setMeterValue] = useState(0);
//   console.log(meterValue);
//   const handleMeterChange = (e) => {
//     setMeterValue(e.target.value);
//   };

//   function Handlebg() {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     const randomElement = colors[randomIndex];
//     setColor(randomElement);
//   }
//   return (
//     <div>
//       <div style={{ background: color, height: "30vh", width: "40vw" }}>
//         jhjhjhj
//       </div>
//       <button onClick={Handlebg}>Change bg</button>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={meterValue}
//         onChange={handleMeterChange}
//       />{" "}
//     </div>
//   );
// };

// export default App;

const App = () => {
  return (
    <>
      <h1>Reactjs Basic Projectjs</h1>
      <ImageSlider />
      <Faqproject />
      <Quoutesgenerator />
    </>
  );
};

export default App;
