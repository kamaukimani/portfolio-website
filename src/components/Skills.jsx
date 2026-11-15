import frontend from '../assets/frontend.jpg'
import backend from '../assets/backend.jpg'
import database from '../assets/database.jpeg'
import tools from '../assets/tools.jpeg'

function Skills(){
    return (
        <article className="color">
            <h1>My Skills</h1>
            <div>
                <h4>Technologies and Tools I use to bring ideas to life:</h4>
                <main className="main">
                    <div className="image">
                        <img src={frontend} alt="Frontend" />
                        <h3>Frontend</h3>
                        <strong>HTML●CSS●Javascript-React,React Native</strong>
                    </div>
                    <div className="image">
                        <img src={backend} alt="Frontend" />
                        <h3>Backend</h3>
                        <strong>Python●Flask●RESTful Apis●SQL</strong>
                    </div>
                    <div className="image">
                        <img src={database} alt="Frontend" />
                        <h3>Databases</h3>
                        <strong>PostgreSQL●SQLite</strong>
                    </div>
                    <div className="image">
                        <img src={tools} alt="Frontend" />
                        <h3>Tools</h3>
                        <strong>Git●Github●VS Code●Figma●Postman</strong>
                    </div>
                </main>
            </div>
        </article>
    )
}

export default Skills;