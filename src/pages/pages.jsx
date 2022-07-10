import React from 'react';
import Home from './home';
import Cuisine from './cuisine';
import Searched from './searched';
import Recipe from './recipe';
import {Route, Routes} from 'react-router-dom';

const Pages = () => {
    
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cuisine/:type" element={<Cuisine/>} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
    )
};

export default Pages;