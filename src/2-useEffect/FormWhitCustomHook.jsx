import { useEffect, useState } from "react"
import { useForm } from "../Hooks/useForm"


export const FormWhitCustomHook = () => {

    /* */


    const { formState, onChangeinput, usuario, email,password, resetForm } = useForm(
        {
            usuario: '',
            email: '',
            password: ''
        }
    )

   // const { usuario, email, password }= formState
    return (
        <>
            <h1>Formulario Simple con hooks</h1>
            <hr />
            <input type="text"
                className="form-control"
                placeholder="Axel"
                name="usuario"
                value={usuario}
                onInput={onChangeinput}
            />


            <input type="email"
                className="form-control mt-3"
                placeholder="axel.1995@live.com.mx"
                name="email"
                value={email}
                onInput={onChangeinput}
            />

            <input type="password"
                className="form-control mt-3"
                placeholder="contraseña"
                name="password"
                value={password}
                onInput={onChangeinput}
            />

            <button onClick={ resetForm } className="btn btn-primary mt-2">borrar</button>






        </>
    )
}


