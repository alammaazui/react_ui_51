import React from 'react'

export default function Child(props) {
    // console.log(props.data())
    // props.data.greetStudent()
    let a = ("a" == "a") //true
    a = ("a" == "b") //false
    a = ("a" != "b") //true
  return (
    <div>
      {a ? <button>True</button> : <button>False</button>}

      {props.data ? (
        <button
          onClick={() => {
            console.log("test");
            props?.data();
          }}
        >
          Click Me...
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
