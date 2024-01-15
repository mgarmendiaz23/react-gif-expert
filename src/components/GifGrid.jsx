// import { useState, useEffect} from "react";

import { GifItem } from "./GifItem";

// import { getGifs } from "../helpers/getGifs";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( { category } ) => {

    // Creacion de un Custom Hook (Hook Personalizado)
    // 
    const { images, isLoading } = useFetchGifs( category )

    // console.log( { images, isLoading } );

    // Esta parte fue comentada y pasada debido a la creacion del Custom Hook arriba.
    // ==============================================================================
    // // Firma de useState
    // // const [counter, setCounter] = useState(10);

    // // Using useState to manage the state with images.
    // const [images, setImages] = useState([]);

    // const getImages = async() => {

    //     // We going to find getGifs in ../helpers/getGifs
    //     const newImages = await getGifs( category );
    //     setImages(newImages);

    // }

    // // Firma de useEffect
    // // si dejo la parte de lista dependencias vacia [ ]
    // // significa que el Hook useEffect solo se va a disparar
    // // la primera vez que se crea y se construye el compomente GifGrid.
    // useEffect( () => {  
    //     getImages();        
    // }, [] )
    // ==============================================================================
    
    return (
        <>
            <h3> { category } </h3>

            {/* 1er forma crear un mensaje del Loading: Usando un ternario */}
            {/* {
                isLoading ? 
                ( <h2>Loading.....</h2> ) :
                null                
            } */}

            {/* 1er forma crear un mensaje del Loading: Usando un && (AND logico) */}
            {/* esto es llamado: If corto con una sola condicion */}
            {/* Esta fue la forma que dejo el profe */}
            {
                isLoading && ( <h2>Loading.....</h2> )
            }

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                     ))
                }
            </div>

            {/* <h5> { counter } </h5> */}
            {/* <button onClick={ () => setCounter( counter + 1 ) } >+1</button> */}

        </>
    )
}
