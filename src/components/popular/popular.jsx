// import React from 'react';

import { useEffect,useState } from "react";

const Popular = () =>{
    
    const [popular,setPopular]=useState([]);

    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular=async()=>{
        const response=await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const result=await response.json();
        setPopular(result.recipes);
    }

    return(
        <div>
            {popular.map(recipe=>
                <div key={recipe.id}>
                    <p>{recipe.title}</p>
                </div>  
            )}
        </div>
    )
};

export default Popular;