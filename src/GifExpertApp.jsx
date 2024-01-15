import { useState } from 'react';

// Aqui importamos los componentes por medio del index.js
// creado y colocado en la carpeta components. index.js
// contine las exportaciones de componentes como AddCategory.jsx
// forma de agrupar los imports de componentes. Para ello se
// debe importar el index.js pero no es necesario explicitamente
// sino con solo apuntar a la carpeta que lo contiene, javascript
// lo primero que levantara sera el index.js de la siguiente forma.
// y no de la forma: import { AddCategory, GifGrid } from './components/index'
import { AddCategory, GifGrid } from './components'

// Functional Component - usar el snipper: rafc + tab
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = ( newCategory ) => {

        // Valida no exista en el arreglo
        if ( categories.includes(newCategory) ) return;

        // console.log(newCategory);
        setCategories( [newCategory, ...categories] )
    }    

    return (
    // <> </> se llaman fragmentos: fragments
    <>
    
        {/* titulo */}
        <h1>Gif Expert App</h1>


        {/* Input para busquedas */}
        <AddCategory             
            // setCategories={ setCategories } 
            onNewCategory={ value => onAddCategory(value) }
        />


        {/* Result o: Grid de tarjetas/Items/Gifs */}
        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        {/* Eliminamos el <ol></ol> debido a que ya no tiene razon de ser */}
        {/* <ol> */}

        { 
            categories.map( ( category ) => ( 
                <GifGrid 
                    key={ category } 
                    category={ category } 
                /> 
            )) 
        }            

        {/* </ol> */}

    </>
    )
}
