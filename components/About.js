// src/components/About.js
import React from 'react';
import './About.css';
import ka from './Images/gb1.webp';
import kb from './Images/gb2.jpg';

const About = () => {
  return (
    <div>
      <h1 className='abt'>- About Us -</h1>

      <main>
        <section className="intro">
          <p>Welcome to Social Network. We strive to make the world a better place with our innovative solutions.</p>
        </section>

      <marquee > <h2 className='top'>Meet Our Team</h2> </marquee>  

        <section class="team">
          <div class="team-member">
            <img src={kb} className='n' />
            <div className="member">
              <h3>Mark Zuckerberg-CEO</h3>
              <p>
Mark Zuckerberg is the founder, chairman and CEO of Meta, which he originally founded as Facebook in 2004. Mark is responsible for setting the overall direction and product strategy for the company. He leads the design of Meta's services and development of its core technology and infrastructure. Mark studied computer science at Harvard University before moving the company to Palo Alto, California.

</p>
            </div>
          </div>
          <div class="team-member">
            <img src={ka} className='n' />
            <div className="member">
              <h3>Andrew Bosworth-CTO</h3>
              <p>
              Meta's Chief Technology Officer Andrew Bosworth shared how his early days at Facebook were while he was working with Mark Zuckerberg. In a discussion on Lenny's Podcast, Andrew Bosworth revealed how much sacrifice and dedication it took to build the company. There was "tremendous camaraderie" and memories made among Facebook's early workers and everyone ate most of their meals together and often lived within a mile of the office, he shared.</p>
            </div>
          </div>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>"Our mission is to deliver exceptional products and services that improve the quality of life for people around the world"</p>
        </section>
      </main>
      <br /> <br /><br /><br />
      <footer>
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>




    </div>
  );
};

export default About;