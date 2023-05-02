import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../Hooks/useTodo"




export const TodoApp = () => {

  const { todos, HandLeDeleteTodo, HandleNewTodo, HandLeToggleTodo, todosCount,todosPendient } = useTodo([])

  return (
    <>
      <h1>  TodoApp:{ todosCount } <small> pendientes: { todosPendient } </small> </h1>
      <hr />

      <div className="row">

        <div className="col-7">
          <TodoList todos={todos} 
                    onDeleteTodo={ HandLeDeleteTodo } 
                    onToggleTodo={  HandLeToggleTodo }
          />
        </div>

        <div className="col-5">
          <h4> Agregar TODO </h4>
          <hr />

          <TodoAdd onNewTodo={HandleNewTodo} />

        </div>
      </div>


    </>
  )
}


