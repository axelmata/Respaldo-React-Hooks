import { useMemo, useState } from "react"
import { useCounter } from "../Hooks"

const HeavyStuff = (iterationNumber = 100) =>{
    for(let i=0; i<iterationNumber; i++){
        console.log('ahi vamos')
    }

    return `${iterationNumber} iteraciones realizadas`

}
 
export const MemoHook = () => {

    const [show, setShow] = useState(true);

    const { counter, incrementar } = useCounter(1)

    const memorizeValue = useMemo( () => HeavyStuff( counter ), [counter] )

    return (
        <>
            <h1> Counter  <small>{ counter}</small></h1>
            <hr />

            <h4>{ memorizeValue }</h4>

            <button
                className="btn btn-primary"
                onClick={() => incrementar()}
            >
                +1
            </button>

            <button className="btn btn-outline-primary" onClick={() => setShow( !show ) }>
                show/hide { JSON.stringify(show) }
            </button>
        </>
    )
}

