import React, {useState} from 'react'
import Title from '../Title'
import './Contact.css'
import Linked from '../assets/linkedin-01.png';
import Email from '../assets/email-01.png';
import Github from '../assets/gith-01.png';
// import Button from '../Button';
import emailjs from 'emailjs-com';

function Contact() {
    const [Text, setText] = useState("Contact Me");


    function sendEmail(e){
        e.preventDefault();
        

        emailjs.sendForm(
            "service_badam4i",
            "template_bfkqirp",
            e.target,
            "Sc8bhWrRDukv7Sv91"
        ).then(res => {
            console.log(res)
        }).catch (err => {
            console.log(err);
        })

        e.target.reset();

    }
    const linkedIn = () => {
        window.open("https://www.linkedin.com/in/benni-setiady/");
    };
    const github = () => {
        window.open("https://github.com/Bennismrt");
    };
    return (
        <div className='contact' id="Contact">
            <Title name="Contact" style={ContactTitle}/>
            <div className='masterCard'>
                <div className='card1'>
                    <p>get in touch with me? here are some ways to connect with me. Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng pagpriprint at pagtytypeset. Ang Lorem Ipsum ang naging regular na modelo simula pa noong 1500s.</p>
                    <div className='Email'>
                        <img src={Email}></img>
                        <div className='subEmail'>
                            <h1>Email</h1>
                            <p>Bennysetiady111@gmail.com</p>
                        </div>
                    </div>
                    <div className='Github'>
                        <img src={Github} onClick={github}></img>
                        <div className='subGithub'>
                            <h1 onClick={github}>Github</h1>
                            <p onClick={github}>github.com/Bennismrt</p>
                        </div>
                    </div>
                    <div className='LinkedIn'>
                        <img src={Linked} onClick={linkedIn}></img>
                        <div className='subLinkedIn'>
                            <h1 onClick={linkedIn}>LinkedIn</h1>
                            <p onClick={linkedIn} >linkedin.com/in/benni-setiady/</p>
                        </div>
                    </div>
                </div>
                <div className='card2'>
                    <h1>{Text}</h1>
                    <form onSubmit={sendEmail} className='form'>
                        <label>Name</label>
                        <input type='text' name='name'/>
                        
                        <label>Email</label>
                        <input type='email' name='user_email' required/>

                        <label>Description</label>
                        <textarea name='message' rows='10'></textarea>
                        <input type='submit' value='Submit' onClick={() => {
                        setText("Your message was sent successfully");
                        setTimeout(() => {
                            setText("Contact Me ");
                        }, 4000);
                        }} className="btnPrimer"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
const ContactTitle = {
    fontSize: "54px",
    paddingBottom: "52px",
    textAlign:"center"
}

// const ButtonStyle = {
//     margin: '100px',
//     fontSize: '20px',
//     width: "300px",
//     padding: "13px 20px"

// }