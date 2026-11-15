import {useNavigate} from 'react-router-dom'

function Experience(){
    const navigate = useNavigate()
    return(
        <article className="color">
            <h3>My Learning Journey</h3>
            <div>
                <p className="experience">I began my software development journey at Moringa School, where I undertook an Introduction to <br/>
                    Programming course, gaining foundational knowledge in HTML, CSS, and JavaScript.<br/>
                    I then advanced my skills through a Software Engineering Bootcamp, where I gained<br/>
                    hands-on experience withJavaScript, React, React Native, Python, SQL, and Flask.<br/>
                    I also developed practical knowledge of database management, working with PostgreSQL and SQLite.<br/>
                    These learning experiences have strengthened my problem-solving abilities and equipped me with<br/>
                    the skills to build responsive, interactive, and database-driven applications.
                    </p><br/>
                    <br/>
                    <h3>Team Projects</h3>
                    <p className="experience">
                        During my Software Engineering Bootcamp, I collaborated with a team of five students to plan,<br/>
                        develop, and deliver group projects. Working in a team helped me strengthen my communication,<br/>
                        problem-solving, and teamwork skills while gaining practical experience in collaborative software<br/>
                        development. We used GitHub for version control, code sharing, and managing contributions, as<br/>
                        well as Jira to organize tasks, track progress, and coordinate our workflow. This experience taught<br/>
                        me the importance of teamwork, effective communication, and collaboration in building successful<br/>
                        software projects
                    </p><br/>
                    <br/>
                    <h3>Soft Skills</h3>
                    <p className="experience">
                        I have also invested in developing my professional and personal skills through various courses offered<br/>
                        by the African Management Institute (AMI), earning certificates in several areas of personal and<br/>
                        professional development. These courses covered effective communication, emotional intelligence,<br/>
                        entrepreneurship, influencing others, performance management, personal productivity, problem-solving<br/>
                        , self-management, goal setting, and leadership. Through this training, I have strengthened my ability<br/>
                        to communicate effectively, work with others, manage responsibilities, solve challenges, set achievable<br/>
                        goals, and take initiative in both individual and team environments.<br/>
                        <button onClick={()=>navigate("/ami")}>View Certificates</button>
                    </p>
            </div>
        </article>
    )
}

export default Experience;