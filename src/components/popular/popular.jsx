import { useEffect,useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide'; //carousel
import '@splidejs/splide/dist/css/splide.min.css';

const Popular = () =>{
    
    const [popular,setPopular]=useState([]);

    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular=async()=>{

        /*
            In localstorage, you can only "set" "strings"
            so you're taking the array and making it the string.
            and when you "get" it, when you're pulling the item back,
            you're "parsing" it back from string to the array
        */

        const check=localStorage.getItem('popular');

        if(check){ //localstorage에 'popular'라는 key값이 있다면
            setPopular(JSON.parse(check));
        } else{ //없다면
            const response=await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const result=await response.json();
            
            localStorage.setItem('popular',JSON.stringify(result.recipes));
            setPopular(result.recipes);
        }
    }
    console.log(popular);

    return(
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage:4,
                    arrows:false,
                    pagination:false,
                    drag:'free',
                    gap:'5rem'
                }}>
                    {popular.map(recipe=>
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                <Gradient />
                            </Card>
                        </SplideSlide>
                    )}
                </Splide>
            </Wrapper>
        </div>
    )
};

const Wrapper=styled.div`
    margin:4rem 0rem;
`

const Card=styled.div`
    min-height:25rem;
    border-radius:2rem;
    overflow:hidden;
    position:relative; 

    img{
        border-radius:2rem;
        position:absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;
    }

    p{
        position:absolute;
        z-index:10;
        left:50%;
        bottom:0%;
        transform:translate(-50%,0%);
        color:white;
        width:100%;
        text-align:center;
        font-weight:600;
        font-size:1rem;
        height:40%:
        display:flex;
        justify-content:center;
        align-items:center;
    }
`

const Gradient=styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Popular;