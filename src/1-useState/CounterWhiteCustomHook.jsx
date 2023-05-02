import { useCounter } from "../Hooks/useCounter"

export const CounterWhiteCustomHook = () => {
    const { counter, incrementar, restar, reiniciar } = useCounter();


    return (



        <>
            <h1>Counter con hook: { counter } </h1>

            <button className="btn btn-primary" onClick={ () => incrementar(2) }>+1</button>
            <button className="btn btn-secondary" onClick={ reiniciar }>Reset</button>
            <button className="btn btn-primary" onClick={ () => restar(2) }>-1</button>
        </>
    )
}
