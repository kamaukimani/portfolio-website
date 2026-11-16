
function Footer(){
    return(
        <footer className="footer">
            <h2>Paul Kimani</h2>
            <p>Full-Stack Developer passionate About building useful applications</p>
            <nav className="social-links">
                <a href="https://github.com/kamaukimani"
                    target="_blank"
                    rel="noopener noreffer"
                    >
                    <img src="/github.png" alt="github" height="30" width="30"/>
                </a>
                <a  
                     href="https://www.linkedin.com/in/paul-kimani-222a29338/"
                     target="_blank"
                     rel="noopener noreffer"
                    >
                   <img src="/linkedin.jpeg" alt="LinkedIn" height="30" width="30" />
                </a>
            </nav>
            <p>
                &copy; 2026 Paul Kimani.
                All rights reserved
            </p>
        </footer>
    )
}

export default Footer;