import React from 'react'
import { SubHome } from './SubHome';
import Navbar from './Navbar';
function Home() {
    return (
        <div id="Home" style={home}>
        <Navbar/>
        <SubHome/>
        
        </div>
    )   
    }

export default Home;

const home = {
    margin: "0",
    padding: "0",
    boxSizinf: "border-box"
}