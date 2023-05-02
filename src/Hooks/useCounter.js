import { useState } from "react"

export const useCounter =( initalValue=10 ) => {


    const [counter, setCounter] = useState( initalValue );

    const incrementar = (value = 1) => {
        setCounter( counter + value);
    }

    const restar = (value = 1) => {
        setCounter ( counter - value );
    }

    const reiniciar = () =>{
        setCounter( initalValue )
    }

    return{
        counter,
        incrementar,
        restar,
        reiniciar,
    }
}