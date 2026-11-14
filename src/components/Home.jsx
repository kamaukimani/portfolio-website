import {Link} from "react-router-dom";

function Home(){


       
    return(
        <main className="color">
            <h1>Welcome to the Home page!!</h1>
            <br/>
            <div id="home">
                <p>
                Hello, I'm Paul Kamau.
                </p>
                <p >
                    I'm a Full-Stack Developer who loves understanding how things work<br/>
                    under the hood.Graduated recently from Moringa school where i was <br />
                    persuing <strong>Software Engineering</strong>
                </p>
                <p></p>
                <br />
                <div>
                    <Link to='/projects' className="btn">View Projects &rarr;</Link>
                    {" "}
                    <Link to='/about' className="btn">More About Me &rarr;</Link>
                </div>
            </div>
        </main>
    )
}

export default Home;