function Projects(){
    return(
        <main className="color">
            <h2>My some of my best works and their images</h2>
            <main className="mainp">
                <div>
                    <div>
                        <h3>Pesa-Tracker Mobile Application</h3>
                        <div className="imageT">                        
                            <img src="/t1.jpeg" alt="image 1" />
                            <img src="/t2.jpeg" alt="image 1" />
                            <img src="/t3.jpeg" alt="image 1" />
                            <img src="/t4.jpeg" alt="image 1" />
                        </div>
                        <p className="pImage">
                            Pesa-Tracker application allows user to track their mobile money with ease.It reads all the 
                            M-pesa messages and creates a contact list per each person<br/>
                            This is an application with a fully functional frontend and backend.
                            The <strong>frontend</strong> is built with react-native(Expo) and display responsive user interface(UI).<br/>
                            A user can navigate from the <em>Dashboard</em>, <em>Contact</em>,<em>Transactions</em>, <em>Analytics</em>, and <em>Profile</em>.
                            The Dashboard contains a welcome message when a user logs in.The Contact contains<br/>
                            a list names derived from <strong>M-pesa</strong> messages.Clicking on a name opens all transactions between you and the user.
                            Analytics gives a summary overviews of total transactions<br/>
                            and the total amount spent.Profile contains your information: username,email,phonenumber and buttons to: edit your profile details,
                            request suport via email or phone and logout.<br/>

                            The <strong>backend </strong>helps process user data filled from the signup, login and edit buttons.
                            It also handles the logic to send the M-pesa messages to the database. After succesfully storing them<br/>
                            in the database, they are then fetched and displayed on the frontend.
                            
                        </p>
                    </div>
                    <div>
                        <h3>Plant-Store Project</h3>
                        <div className="imagep">                        
                            <img src="/p1.png" alt="image 1" />
                            <img src="/p2.png" alt="image 1" />
                            <img src="/p3.png" alt="image 1" />
                        </div>
                        <p className="pImage">
                            The Plant-Store project is an application containing both frontend and backend.
                            The <strong>frontend</strong> is responsible for displaying the plants details plus a form where <br/>
                            a user can search a plant by name and add a new plant by providing:plant name,image-url and the plant price.
                            The <strong>backend </strong>handles routes to get plants from <br/>the database,edit an 
                            individual plant details ,add a new plant to the database and deleting a plant from the database.
                        </p>
                        <a href="https://github.com/kamaukimani/plant-store"
                            target="_blank" rel="noopener noreferrer"
                            >Github Project Link
                        </a>
                    </div>
                </div>
            </main>
        </main>
    )
}

export default Projects;