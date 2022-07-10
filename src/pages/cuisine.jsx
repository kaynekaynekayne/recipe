import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const Cuisine = () => {

    const [cuisine,setCuisine]=useState([]);
    let params=useParams();

    const getCuisine=async(name)=>{
        const response=await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisines=${name}`);
        const recipe=await response.json();
        setCuisine(recipe.results);
    }

    console.log(cuisine);

    useEffect(()=>{
        getCuisine(params.type);
    },[params.type]);


    return(
        <div>
            <h1>Cuisine</h1>
        </div>
    )
};



export default Cuisine;