
import { useState,useReducer } from "react";


export default function Todo() {


 

    function reducer (state , action){
        console.log("action ", action)

        switch(action.type){
            case "ADDTASK" : return([...state,action.payload.todo])

            case "REMOVETASK" : return(state.filter(todo=> todo.id != action.payload.id ))
           
            
            case "CHANGESTATUS" :return(
                state.map(todo => {

                    if(todo.id == action.payload.id){
                        return {...todo, status : true}
                    }
                    else{
                        return todo

                    }

                })

            )
        }

    }

    let [title,setTitle]= useState("")

    let [todos,dispatch] = useReducer(reducer,[])

    console.log("todos => ",todos)

    function createTask (e){

        e.preventDefault()
        
        let id = Date.now()

        let todo = {id,title,status:false}

        dispatch({type:"ADDTASK" ,payload:{todo} })

    }
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div
              className="card p-5"
            >
              <h1 className="display-2 text-center">Todo App</h1>
              <form onSubmit={(e)=>{createTask(e)}}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Task Text "
                  onChange={(e)=>{setTitle(e.target.value)}}
                />
                <input type="submit" value="Create Task" className="my-2 w-100 btn btn-success"  />
              </form>
              
            </div>
            <div className="card my-3 p-3">
                <ul className="list-group">



                    {todos && todos.map( function (todo) {
                        return todo.status ? (
                          <li className="bg-secondary list-group-item text-decoration-line-through">
                            {todo.title}
                            <button
                              className="btn btn-danger float-end"
                              onClick={() => {
                                dispatch({
                                  type: "REMOVETASK",
                                  payload: { id: todo.id },
                                });
                              }}
                            >
                              Remove{" "}
                            </button>
                          </li>
                        ) : (
                          <li className="list-group-item">
                            {todo.title}
                            <button
                              className="btn btn-danger float-end"
                              onClick={() => {
                                dispatch({
                                  type: "REMOVETASK",
                                  payload: { id: todo.id },
                                });
                              }}
                            >
                              Remove{" "}
                            </button>
                            <button
                              className="btn btn-secondary float-end mx-2"
                              onClick={() => {
                                dispatch({
                                  type: "CHANGESTATUS",
                                  payload: { id: todo.id },
                                });
                              }}
                            >
                              Mark Completed{" "}
                            </button>
                          </li>
                        );

                    } )}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
