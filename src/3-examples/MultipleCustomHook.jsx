import { useCounter, useFetch } from "../Hooks"
import { Loading,Quotes } from "./";


export const MultipleCustomHook = () => {

    const { counter, incrementar, } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    //console.log({ data, isLoading, hasError })

    const { author, quote } = !!data && data[0]

    return (
        <>
            <h1>braking Quotes</h1>
            <hr />

            {
                isLoading
                    ?<Loading/>
                    :<Quotes author={author} quote={quote}/>

            }

            <button className="btn btn-primary" 
                    disabled={isLoading}
                    onClick={ () => incrementar(1) }
                    >Next Quote</button>


        </>
    )
}

