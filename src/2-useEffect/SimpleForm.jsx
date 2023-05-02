import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        usuario: 'axelmata',
        email:'axel.1995@live.com.mx'
    });

    const { usuario,email } = formState;

    const onChangeinput = ({target}) =>{
        const  {name, value } = target
        setFormState({
            ...formState,
            [name]: value
        });
    }


    useEffect( () =>{
        //console.log('Desde useEffect')
    }, [ ])

    useEffect( () =>{
        //console.log('Cambiando Formulario')
    }, [ formState ])

    useEffect( () =>{
        //console.log('Cambiando Email')
    }, [ email ])

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input type="text"
                className="form-control"
                placeholder="Axel"
                name="usuario"
                value={ usuario }
                onInput={ onChangeinput }
            />
            <input type="email"
                className="form-control mt-3"
                placeholder="axel.1995@live.com.mx"
                name="email"
                value={email}
                onInput={ onChangeinput }
            />
            {
              (usuario === 'axelmata2') && <Message />
            }
            
        </>
    )
}


