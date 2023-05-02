import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export const LoginPage = () => {
    const { usuario, setUsuario } = useContext(UserContext)

    return (

        <>
            <h1>Login Page</h1>
            <pre>
                {JSON.stringify(usuario, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={ () => setUsuario({ id:1234, name:'Leonardo Mata', email: 'Leonador@gmail.com' }) }
            >
                Establecer usuario

            </button>
        </>
    )
}


