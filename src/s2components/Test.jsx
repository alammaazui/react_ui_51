import React from "react";

export default function Test() {
  let user_status = "loggedInn";
//   let user_status ="notloggedInn"

  return (
    <>
      {
        user_status == "loggedInn" 
        ? 
        <button>Logout</button>
        : 
        <>
          <button>Login</button>
          <button>Register</button>
        </>
      }
    </>
  );
}
