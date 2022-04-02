import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const App = () => {
  const [count, setCount] = useState(0);
  if (count === 101) {
    setCount(0);
  }

  const getReset = () => {
    setCount(0);
  };

  return (
    <div className="obshiy">
      <Navbar />
      <div className="con">
        <h1
          style={{
            fontSize: "70px",
            fontFamily: " Lobster, cursive",
            color: "green",
            fontWeight: "500",
          }}
        >
          Tasbih Pro
        </h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8, borderRadius: "100%" }}
        >
          <button className="btn" onClick={getReset}>
            <h3>Reset</h3>
          </button>
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Lobster, cursive",

            fontSize: "50px",
            marginBottom: "30px",
            marginTop: "30px",
          }}
          onClick={() => setCount(count + 1)}
          className="container"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8, borderRadius: "100%" }}
        >
          <h1>{count}</h1>
        </motion.div>
        <div className="divcha">
          <h2>
            {count <= 33
              ? "Subhanallah"
              : count <= 66
              ? "Alhamdulillah"
              : count === 100
              ? "MashaAllah, Tasbih tugadi"
              : "Allohu Akbar"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default App;
