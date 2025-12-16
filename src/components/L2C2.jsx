import { useContext } from "react";
import { my_context } from "../SvContext";

export default function L2C2() {

    let {sv,setSv}= useContext(my_context)
  return (
    <>
      <h3 className="bg-warning">Level 2 Component 2 {sv}</h3>
      <button onClick={()=>{setSv("new value")}}>change sv value</button>
    </>
  );
}
