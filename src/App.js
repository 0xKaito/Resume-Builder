import React from "react";
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar/Navbar"
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { BrowserRouter ,Routes,Route} from "react-router-dom";

import "./App.css";
//import { Home } from "react-feather";
import About from "./components/pages/About";

import Home from "./components/pages/Home";
import Creation from "./components/pages/Creation";
import Abts from "./components/pages/Abts";
import Contact from "./components/pages/Contact";




function App() {
  return (
  
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/Home" element={<Home/>} />
    <Route path="/Create" element={<Creation/>} />
    <Route path="/Abts" element={<Abts/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Contact" element={<Contact/>} />
    
   </Routes>
  



   </BrowserRouter>
   
   
  );
}

export default App;
