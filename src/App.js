import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import {Footer,Blog,Posibility,Features,WhatGPT3,Header,Home} from "./containers";
import {CTA,Brand,Navbar} from "./components";



function App() {
  return (
    <div className="App ">
     
        <BrowserRouter>
        <Navbar />
        <Header />
        <Brand />
        <Routes>

            <Route path="/" element={ <Home /> } />
            <Route path="/WhatGPT3" element={ <WhatGPT3 /> } />
            <Route path="/Features" element={ <Features /> } />
            <Route path="/Posibility" element={ <Posibility /> } />
            <Route path="/CTA" element={ <CTA /> } />
            <Route path="/Blog" element={ <Blog /> } />
           
       
     
      </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
