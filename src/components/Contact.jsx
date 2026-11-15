import whatsapp from '../assets/whatsapp.jpeg'

function Contact(){

    const message = "Hello Paul, I found your portfolio.Can we chat?"
    const whatsappUrl = `https://wa.me/254798571083?text=${encodeURIComponent(message)}`;
    return(
        <header className="color">
            <h1>You can contact me via:</h1>
            <div>
                <h2>WhatsApp:</h2>
                <a href={whatsappUrl}
                    target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="Whatsapp" width="30"/>
                </a>
                <h2>Email:</h2>
                <a href="mailto:paulkimys285@gmail.com" >📤</a>
                <h2>Call</h2>
                <a href="tel:+254798571083" className="a">📞 Phone</a>
                <h2>Message</h2>
                <a href="sms:+254798571083" className="a">💬 Lets Chat</a>

            </div>
        </header>
    )
}

export default Contact;
