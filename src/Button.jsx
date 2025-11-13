import React from "react";

export default function Button({content}) {
  let style = {
    display: "block",
    height: "20px",
    width: "80%",
    margin: "4px auto",
    border: "2px solid #5a5a5a",
    backgroundColor: "#2d2d2d",
    color:'whitesmoke'
  };

  return (
    <>
      <button style={style}>{content}</button>
    </>
  );
}
