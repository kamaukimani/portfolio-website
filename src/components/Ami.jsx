import img1 from '../assets/ami/communication.png'
import img2 from '../assets/ami/emotional-intelligence.png'
import img3 from '../assets/ami/entrepreneurship.png'
import img4 from '../assets/ami/influence.png'
import img5 from '../assets/ami/performance-management.png'
import img6 from '../assets/ami/personal-productivity.png'
import img7 from '../assets/ami/problem-solving.png'
import img8 from '../assets/ami/self-management.png'
import img9 from '../assets/ami/setting-goals.png'
import img10 from '../assets/ami/speak-up.png'

function Ami(){
    const images=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]
    return (
        <div className="color">
            <h1>AMI Certificates</h1>
            <div>
                {images.map(image=>{
                    return(
                        <img src={image} />
                    )
                })}

            </div>
        </div>
    )
}


export default Ami;

