import React from 'react';

export default function Contact() {
    const email = 'stephanie.terese@gmail.com';

   return  (
   <section id="contact">
    <div className="contact-container">
    <div className="center-text"><h2>c o n t a c t</h2></div>
    <a href='https://github.com/stephanie-115'>
        
    </a>
    <a href={`mailto:${email}`}>
        
    </a>
    <a href='https://www.linkedin.com/in/stephanie-t-serrano/'>
        
    </a>
    </div>
    </section>
    )
}