"use client";
import React, { useState } from "react";
const arrayLength = 22222;
const longArray = Array.from({ length: arrayLength }, (_, index) => index);
const randomColors = longArray.map((ele) => getRandomColor());
const pixelSize = "4px";
function getRandomColor() {
  // Generate a random hexadecimal color code
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return color;
}
const Home: React.FC = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <h1>Welcome to About Section</h1>
      <button
        onClick={() => {
          console.time("timer");
          setState((p) => p + 1);
        }}
      >
        Change State
      </button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {longArray.map((value) => {
          return <Pixel key={value} value={value} />;
        })}
      </div>
    </>
  );
};

export default Home;

const Pixel: React.FC<{ value: number }> = ({ value }) => {
  if (value === arrayLength - 1) {
    console.log("done");
    console.timeEnd("timer");
  }
  return (
    <div
      style={{
        width: pixelSize,
        height: pixelSize,
        backgroundColor: getRandomColor(),
      }}
    ></div>
  );
};
