import React from 'react';
import "./home.scss";

import WhatGPT3 from "../whatGPT3/WhatGPT3";
import Features from "../features/Features";
import Posibility from "../posibility/Posibility";
import CTA from "../../components/cta/CTA";
import Blog from "../blog/Blog";

const Home = () => {
    return (
        <div>
              
             <WhatGPT3 />
            <Features /> 
            <Posibility />
            <CTA /> 
            <Blog /> 
        </div>
    );
};

export default Home;