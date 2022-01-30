import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kjxy1al', 'template_1wsa0i9', form.current, 'user_iEELACnWBU5yvBPdznpHM')
        .then(() => {
            alert('Sent!');
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('body').value = '';
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className='contactDiv'>
            <form id='emailForm' ref={form} onSubmit={sendEmail}>
                <h1>Fill <span className="flicker">out</span> to reach me!</h1>
                <input type='text' placeholder='Name' id='name' name="name" style={{fontFamily: 'Arial'}} />
                <input type='email' placeholder='Email' id='email' name="user_email" style={{fontFamily: 'Arial'}} />
                <input type='text' placeholder='Subject' id='subject' name="subject" style={{fontFamily: 'Arial'}} />
                <textarea placeholder='Message' id='body' name="message" style={{fontFamily: 'Arial'}} />
                <button type="submit" value="Send">Send!</button>
            </form>
        </div>
    )
}

export default Contact
