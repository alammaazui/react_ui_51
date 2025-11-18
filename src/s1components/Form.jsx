import React from 'react'
import Input from './Input';

// export default function Form(props) {
//   return (
//     <>
//       <form onSubmit={props.sf}>
//         <input type="text" placeholder={props.ph1} />
//         <input type="text" placeholder={props.ph2} />
//         <textarea name="" id="" placeholder={props.ph3}></textarea>
//         <input type="submit" value={props.content} />
//       </form>
//     </>
//   );
// }

// -------------------------------------------------
// export default function Form({sf,ph1,ph2,ph3,content}) {
    //   return (
        //     <>
        //       <form onSubmit={sf}>
        //         <input type="text" placeholder={ph1} />
        //         <input type="text" placeholder={ph2} />
        //         <textarea name="" id="" placeholder={ph3}></textarea>
        //         <input type="submit" value={content} />
        //       </form>
        //     </>
        //   );
        // }
        
// -------------------------------------------------
export default function Form(props) {
    console.log("props view : " ,props)
  return (
    <>
      <form onSubmit={props.sf}>
        <input type="text" placeholder={props.ph1} />
        <input type="text" placeholder={props.ph2} />
        <textarea name="" id="" placeholder={props.ph3}></textarea>
        <input type="submit" value={props.content} />
        <Input/>
      </form>
    </>
  );
}