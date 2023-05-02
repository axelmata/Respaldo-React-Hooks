const initialState = [{
    id:1,
    todo: 'Recolectar las gemas del infinito',
    done:false 
}]

const todoReducer = ( state = initialState, action = {} ) => {

    if(action.type === '[TODO] add todo') {
        return[...state, action.payload]
    }

    return state;
}

let todos  = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Derrotar a los vengadores',
    done: false
}

const addTodoReduces = {
    type:'[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoReduces)

console.log( { state:todos} )