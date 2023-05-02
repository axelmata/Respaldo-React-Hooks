import { useEffect, useState } from "react"

export const Message = () => {

    const [coord, setCoord] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const onMouseMove = ({ x , y }) =>{
            setCoord({ x,y })
        }

        window.addEventListener( 'mousemove', onMouseMove )

        return () =>{
            window.removeEventListener( 'mousemove', onMouseMove )
        }
    }, []);

    return (
        <>
            <h1>El usuario ya existe</h1>
            { JSON.stringify(coord) }
        </>
    )
}


