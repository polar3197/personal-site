// src/pages/Home.jsx
import React from 'react';
import profilePic from '../../assets/imgs/profile.png';

const Home = () => {
  return (
    <>
    <div className="Header">
        About Me
    </div>
    <div className="Page-Content-inner home-page">
        <img 
          src={profilePic} 
          alt="Charlie Cooper" 
          className="profile-picture"
        />
        <p>
          I'm Charlie Cooper. I recently graduated from UC Berkeley with a B.A. in Math and a B.A. in Computer Science. 
        </p>
        <p>
          I enjoy reading, fullstack programming, running and acrylic painting. 
        </p>
        <p>
          I have some of my most recent paintings in the gallery, and some book reviews under books.
        </p>
    </div>
    </>
  );
};

export default Home;