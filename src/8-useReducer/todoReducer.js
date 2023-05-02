export const todoReducer = (initalState = [], action) => {

    switch (action.type) {
        case '[TODO]add todo':
            return [...initalState, action.payload]

        case '[TODO]remove todo':
            return initalState.filter(todo => todo.id !== action.payload)

        case '[TODO]Toggle todo':
            return initalState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });



        default:
            return initalState
    }

}