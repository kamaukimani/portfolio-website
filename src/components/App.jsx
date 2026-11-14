import Home from "./Home"
import About from './About'
import {Routes,Route} from "react-router-dom"
import NavBar from './NavBar'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'
import React, {useState} from 'react'


function App(){

    const[isDark,setIsDark]=useState(false)

    function handleDarkMode(){
        setIsDark(isDark => !isDark)
    }
    const isColor=isDark ? "white" : "black";
    return(
        <div style={{background:isColor}}>
            <NavBar isDark={isDark} onDarkMode={handleDarkMode}/>
            <Routes>
                <Route
                    path="/"
                    element={<Home/>}
                />
                <Route
                    path='/about'
                    element={<About />}
                />
                <Route 
                    path='/skills'
                    element={<Skills />}
                />
                <Route 
                    path='/projects'
                    element={<Projects />}
                />
                <Route 
                    path='/experience'
                    element={<Experience />}
                />
                <Route 
                    path='/contact'
                    element={<Contact />}
                />
            </Routes>
            
        </div>
    )
}

export default App;