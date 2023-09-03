import { useEffect, useState } from "react";

const Quoutesgenerator = () => {
  const [allquotes, setAllquotes] = useState([]);
  const [unique, setUnique] = useState(" ");
  console.log(unique);
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setAllquotes(json);
      });
  }, []);
  function Getquotes() {
    const getrand = Math.floor(Math.random() * allquotes.length);
    setUnique(allquotes[getrand]);
  }
  return (
    <>
      <h1>Project 3: Quotes Generator</h1>
      <div
        style={{
          backgroundColor: "yellow",
          height: "50vh",
          width: "50%",
          position: "relative",
          left: "25%",
          borderRadius: "20px",
        }}
      >
        <h1>Quoutes generator</h1>
        <div>
          <button onClick={Getquotes} style={{ cursor: "pointer" }}>
            New Quotes
          </button>
          <h2>{unique == " " ? "Click on New Quotes" : unique.text}</h2>
          <p>{unique == " " ? " " : `-${unique.author}`}</p>
        </div>
      </div>
    </>
  );
};

export default Quoutesgenerator;
