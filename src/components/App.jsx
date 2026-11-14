import Home from "./Home"
import About from './About'
import {Routes,Route} from "react-router-dom"
import NavBar from './NavBar'

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
            </Routes>
        </>
    )
}

export default App;