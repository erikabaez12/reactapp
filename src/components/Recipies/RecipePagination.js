import React from 'react'
import { useEffect, useState } from "react";
import { Pagination, Stack } from '@mui/material'
import RecipeReviewCard from './RecipeReviewCard'

const RecipePagination = ({pageNumber, lista}) => {
    const [listaFiltrada, setListaFiltrada] = useState([])
    const [page, setPage] = React.useState(1);

    useEffect( () => { 
        setListaFiltrada([lista[0]])
    }, []);

    const handleChange = (event, value) => {
        setPage(value);
        setListaFiltrada([])
        setListaFiltrada([lista[value -1]])
        window.scroll(0,0)
    };

    return (
        <div>
            <div>
                {listaFiltrada.length > 0 ?
                    <div id="resultados">
                        {listaFiltrada.map((recipe, index) => (
                            <li key={index}>  
                                <RecipeReviewCard title = {recipe.title}
                                    summary = {recipe.summary}
                                    image = {recipe.image}
                                    ingredients =  {recipe.extendedIngredients}
                                    instructions = {recipe.analyzedInstructions[0].steps}
                                    cuisines = {recipe.cuisines}/>    
                            </li>
                        ))}
                    </div>
                :
                    <span>No se encontraron resultados</span>
                }
                <Stack justifyContent="center">
                    <Pagination
                        page={page} 
                        onChange={handleChange} 
                        count = {pageNumber}/>
                </Stack>
            </div>
        </div>
    );
};

export default RecipePagination