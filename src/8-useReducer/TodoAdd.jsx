import { useForm } from "../Hooks/useForm"


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onChangeinput, resetForm } = useForm({
        description:'',
    })

const onFormSubmit = () => {
    event.preventDefault()
    if(description.length <= 1 ) return;

    const newTodo = {
        id: new Date().getTime(),
        done: false,
        description
    }

    onNewTodo( newTodo )
    resetForm()
}

    return (
        <form onSubmit={ onFormSubmit }>
            <input
                type="text"
                placeholder="¿Qué hay que hacer"
                className=" form-control"
                name="description"
                value={ description }
                onInput={ onChangeinput }
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
               
            >
                Agregar
            </button>
        </form>
    )
}


