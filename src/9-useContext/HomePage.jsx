import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export const HomePage = () => {

    const { usuario } = useContext(UserContext)


  return (
    <>
      <h1>HomePage <small>{ usuario?.name }</small></h1>
      <hr />

      <pre>
        { JSON.stringify( usuario, null, 3 ) }
      </pre>
    </>
  )
}


