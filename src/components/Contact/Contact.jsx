import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yga9vll', 'template_8zsvn0i', form.current, {
        publicKey: 'V-5kdvh7UQLjhAUxa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message sending failed. Please try again.');
        },
      );
  };
  return ( 
    <div>
      <div id="contact" className="bg-white h-screen flex items-center justify-center gap-36">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-4">Got a project in mind?</h1>
        <form ref={form} onSubmit={sendEmail}> 
        <label className="block text-white mb-2"> 
        <input  className="w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" label="Name" name="user_name" placeholder="Your name" />
        </label>
        <label className="block text-white mb-2"> 
        <input  className="w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" label="Email" name="user_email" placeholder="Your email" type="email" />
        </label>
       <label className="block text-white mb-2"> 
        <textarea  className="w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32" label="Your Message"  name="message" placeholder="Message" />
        </label >
        <input type="submit" value="Send" />
        </form>
      </div>
      <div>
        <img src="/img4.avif" alt="illustrator"/>
      </div>
    </div>
    </div>
   );
}
 
export default Contact;