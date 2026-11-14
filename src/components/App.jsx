import Home from "./Home"
import About from './About'
import {Routes,Route} from "react-router-dom"
import NavBar from './NavBar'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'

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
                <Route 
                    path='/experience'
                    element={<Experience />}
                />
                <Route 
                    path='/contact'
                    element={<Contact />}
                />
            </Routes>
            
        </>
    )
}

export default App;