import React, { useState } from 'react';

// Download CV
const DownloadCv = () => {
  const link = document.createElement('a');
  link.href = '/CV-Ahmed.pdf';
  link.download = 'A-S-E CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


const About = () => {
  const [index, setIndex] = useState(0);
  // console.log(index);
  return (<div>
    about
  </div>);
};

export default About;
