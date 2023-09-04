import { useState } from "react";

const Shoopinglist = () => {
  const [item, setItem] = useState([]);
  const [inputval, setInputval] = useState("");
  function Handleadd() {
    if (inputval !== "") {
      const adddata = [...item, inputval];
      setItem(adddata);
      setInputval("");
    } else {
      alert("type data first");
    }
  }

  function Handledelete(itemToRemove) {
    const newItems = item.filter((item) => {
      return item !== itemToRemove;
    });
    setItem(newItems);
  }



  return (
    <div>
      <h1>Project 4: Shoping List</h1>
      <div
        style={{
          border: "1px dotted black",
          width: "50%",
          height: item.length == 0 ? "20vh" : "40vh ",
          position: "relative",
          left: "25%",
        }}
      >
        <h3>Item To Buy</h3>
        <input
          type="text"
          name="item"
          value={inputval}
          onChange={(e) => setInputval(e.target.value)}
          style={{ padding: "4px", margin: "10px" }}
          placeholder="Add New Item"
          required
        />
        <button onClick={Handleadd}>ADD</button>
        {item.map((val) => {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  columnGap: "10px",
                }}
              >
                <li>{val}</li>
                <span
                  onClick={() => Handledelete(val)}
                  style={{ cursor: "pointer" }}
                >
                  ❌
                </span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Shoopinglist;
