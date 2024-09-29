import React from "react";
import './Contact.css'
import messageIcon from '../../assets/msg-icon.png';
import mailIcon from '../../assets/mail-icon.png';
import phoneIcon from '../../assets/phone-icon.png';
import locationIcon from '../../assets/location-icon.png';
import whiteArrow from '../../assets/white-arrow.png';


function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_API_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className="Contact">
            <div className="contactCol">
                <h3>
                    Send us a message
                    <img src={messageIcon} alt="" />
                </h3>
                <p>
                    Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                </p>
                <ul>
                    <li>
                        <img src={mailIcon} alt="" />
                        work.withashutosh1807@gmail.com
                    </li>
                    <li>
                        <img src={phoneIcon} alt="" />
                        +91 6386175405
                    </li>
                    <li>
                        <img src={locationIcon} alt=" " />
                        Noida, Uttar Pradesh, India
                    </li>
                </ul>
            </div>
            <div className="contactCol">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    <label> Phone number</label>
                    <input type="tel" name='phone_number' placeholder="Enter your mobile number" required />
                    <label>Write your message here</label>
                    <textarea name="message" placeholder="Enter your message" rows='6' required></textarea>
                    <button type="submit" className="btn dark-btn">
                        Submit now
                        <img src={whiteArrow} alt="" />
                    </button>
                </form>
                <span>
                    {result}
                </span>
            </div>
        </div>
    )
}

export default Contact;
