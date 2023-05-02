import { useState } from "react";
import { UserContext } from "./UserContext";

/*const  user ={
    id:'123',
    name: 'Axel Mata Ramirez',
    email:'axelmata.ramirez@gmail.com'
}*/



export default function UserProvider({children}) {

  const [usuario, setUsuario] = useState();

  return (
    <UserContext.Provider value={{usuario, setUsuario}}>
      { children }
    </UserContext.Provider>
  )
}
