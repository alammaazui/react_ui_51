import { useContext } from "react";
import { my_context } from "../SvContext";

export default function L2C1() {

  const {sv,setSv,cart,serCart} =  useContext(my_context)
  return (
    <>
      <h3 className="bg-danger">Level 2 Component 1 {sv}</h3>
    </>
  );
}
