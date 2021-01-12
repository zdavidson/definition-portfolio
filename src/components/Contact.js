import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="seventhPage" class="seventhPage clearfix">
        <div class="whoWhatWhere">
         
          <h3 class="smallTitle">Talk To Me</h3>
            <h4 class="bigTitleBottom">Let's bring your project to life.</h4>
              <p class="descriptionLeft">I respond to all requests within 48 hours during the week. All quotes are in line with current market rates, and are based on the time, skillset, and the scope of work required for the given project.</p>
         
          </div>
          <div class="form-wrapper">
            <form action="https://formspree.io/f/xwkwwnlr" method="POST" class="contactForm">
              <input type="text" placeholder="Name" name="name" required></input>
              <input type="email" placeholder="Email" name="email" required></input>
              <input type="tel" placeholder="Phone" name="phone"></input>
              <input type="text" placeholder="Budget" name="budget"></input>
              <input type="text" placeholder="Deadline" name="deadline"></input>
              <input type="text" placeholder="Description" name="description" required></input>
              <input class="submitButton" type="submit" value="Get a Quote" name="submit"></input>
            </form>
            </div>
      </div>
    )
}

export default Contact;