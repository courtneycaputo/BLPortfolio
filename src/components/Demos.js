// components/Demos.js

import React from 'react';
import AudioPlayer from '../Audio/AudioPlayer';
import '../styles/customize-progress-bar.css';

const Demos = () => {
  return (
    <section id="demos">
      <h1>Demos</h1>
        <div className="demos">
            <AudioPlayer/>
        </div>
      {/* <p>Placeholder text for the demos section.</p> */}
    </section>
  );
}

export default Demos;