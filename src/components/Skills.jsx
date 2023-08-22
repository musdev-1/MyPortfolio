import React, { useEffect, useState } from 'react'
// import  VelocityComponent  from 'velocity-react';
import './style.css';

const Skills = () => {
    let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
  if (counter == 65) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = "HTML " + counter + "%";
  }
}, 30);

    return (
      <div className='skill-body'> 
         <div class="skill">
                <div class="outer">
    <div class="inner">
      <div id="number">
        65%
      </div>
    </div>
  </div>
  <span class="html-circle-skill">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stop-color="#e91e63" />
          <stop offset="100%" stop-color="#673ab7" />
        </linearGradient>
      </defs>
      <circle id="html-circle" cx="80" cy="80" r="70" stroke-linecap="round" />
    </svg>
  </span>
</div>   
      </div>

  )
}

export default Skills