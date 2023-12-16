// components/Home.js

import React from 'react';
import headergraphic from '../Assets/headergraphic.png';

const Home = () => {
  return (
    <section id="home">
      <img className="header" src={headergraphic}/>
    </section>
  );
}

export default Home;