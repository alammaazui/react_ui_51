import React, { useReducer, useRef, useState } from "react";

export default function Counter() {
  function reducer(state, action) {
    switch (action.type) {
      case "ADD 1":
        return state + 1;
      case "SUB 1":
        return state - 1;
      case "MUL 4":
        return state * 4;
      case "MUL 5":
        return state * 5;
      case "MUL BY UPN":
        return state * action.payload.upn;
      case "empty":
        return ("");
    }
  }

  
  const [state, dispatch] = useReducer(reducer, 1);
  const [number, setNumber] = useState(0);
  console.log("state : ",state)
  console.log("maaz alam ")
  const input_ref = useRef()

  return (
    <>
      <input 
        type="text" 
        onChange={(e)=>{dispatch({ type: "MUL BY UPN" ,payload :{upn :e.target.value }});}} 
        // ref={input_ref}
        id="inp"
      />
      <button onClick={()=>{ 
        document.querySelector('#inp').value = ""
      }}>Clear</button>
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "ADD 1" });
        }}
      >
        Add 1{" "}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "SUB 1" });
        }}
      >
        Sub 1{" "}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MUL 4" });
        }}
      >
        muultiply 4{" "}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MUL 5" });
        }}
      >
        muultiply 5{" "}
      </button>
      <button onClick={()=>{dispatch({type:"empty"})}}>Empty</button>
    </>
  );
}
