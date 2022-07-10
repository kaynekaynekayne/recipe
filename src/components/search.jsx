import styled from 'styled-components';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [input,setInput]=useState('');
    const navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(input);
        // searched(page)로 넘어가야 함
        navigate('/searched/'+input);
    };
    
    return(
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input 
                    onChange={(e)=>setInput(e.target.value)}
                    type="text" 
                    value={input}
                />
            </div>
        </FormStyle>
    )
};

const FormStyle=styled.form`
    margin:2rem;

    div{
        width:100%;
        position:relative;
    }

    input{
        width:100%;
        border:none;
        background:linear-gradient(35deg, #494949, #313131);
        font-size:1.5rem;
        color:white;
        padding:1rem 3rem;
        border:none;
        border-radius:1rem;
        outline:none;
    }

    svg{
        position:absolute;
        top:100%
        left:0%;
        transform:translate(100%, 150%);
        color:white;
    }
`;

export default Search;