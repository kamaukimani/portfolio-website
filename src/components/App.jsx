import Home from "./Home"
import About from './About'
import {Routes,Route} from "react-router-dom"
import NavBar from './NavBar'
import Skills from './Skills'
import Projects from './Projects'

function App(){
    return(
        <>
            <NavBar />
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
            </Routes>
            
        </>
    )
}

export default App;