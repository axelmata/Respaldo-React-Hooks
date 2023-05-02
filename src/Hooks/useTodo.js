import { useEffect, useReducer } from "react";
import { todoReducer } from "../8-useReducer/todoReducer";


export const useTodo = (initialState = []) => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }


    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const HandleNewTodo = (todo) => {
        const action = {
            type: '[TODO]add todo',
            payload: todo
        }

        dispatch(action)
    }

    const HandLeDeleteTodo = (id) => {
        dispatch({
            type: '[TODO]remove todo',
            payload: id
        })
    }

    const HandLeToggleTodo = (id) => {

        dispatch({
            type: '[TODO]Toggle todo',
            payload: id
        })
    }

    return{
        initialState,
        HandLeDeleteTodo,
        HandleNewTodo,
        HandLeToggleTodo,
        todos,
        todosCount: todos.length,
        todosPendient: todos.filter(todo => !todo.done).length
    }
}