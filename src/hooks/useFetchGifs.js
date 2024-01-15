import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    // Firma de useState
    // const [counter, setCounter] = useState(10);

    // Using useState to manage the state with images.
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {

        // We going to find getGifs in ../helpers/getGifs
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);

    }

    // Firma de useEffect
    // si dejo la parte de lista dependencias vacia [ ]
    // significa que el Hook useEffect solo se va a disparar
    // la primera vez que se crea y se construye el compomente GifGrid.
    useEffect( () => {  
        getImages();        
    }, [] )

    return {

        // En EMScript 6, cuando encontramos images: images / solo devolvemos images una vez.
        images,
        isLoading
    }
    
}
