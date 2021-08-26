import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center bg'>
        <div className='d-flex justify-content-lg-around m-3 about-section'>
          <div className='d-flex flex-column intro greeting'>
            <h1>Nice to meet you, I'm Sam.</h1>
            <div className='d-flex flex-column align-items-center m-4'>
            <h3 className='altFont'>Full Stack Software Developer</h3>
            <h4>
              Thanks for visiting, make yourself at home.
            </h4>
            <p> If you'd like to get in touch: <br></br><a href='https://www.linkedin.com/in/sammudick'target="_blank" rel="noreferrer">LinkedIn</a> --- <a href='https://www.github.com/smudick' target="_blank" rel="noreferrer">GitHub</a> --- <a href = "mailto: smudick@gmail.com" target="_blank" rel="noreferrer">Email</a>
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
