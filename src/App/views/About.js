import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center bg'>
        <div className='d-flex justify-content-lg-around m-3 about-section'>
          <div className='d-flex flex-column intro greeting align-items-center'>
            <h1>Hi, I'm Sam.</h1>
            <div className='d-flex flex-column align-items-center m-4'>
            <h3 className='altFont'>Software Engineer | Nashville & Remote</h3>
            <h3>Check Out My <a className="hover-shadow hover-color"href="https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/Sam%20Mudick%20Resume.pdf?alt=media&token=a14d46f9-2014-4c46-a3b5-e44c013a7898" download="SamMudickResume.pdf" target="_blank" rel="noreferrer"><span>R</span><span>e</span><span>s</span><span>u</span><span>m</span><span>e</span></a></h3>
            <h3 className='mt-5'> If you'd like to get in touch: </h3>
              <div className='d-flex flex-row justify-content-between align-items-center col-sm-6'>
                <div>
                  <a href='https://www.linkedin.com/in/sammudick'target="_blank" rel="noreferrer" ><img className='aboutIcon'
                    src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/LI-In-Bug.png?alt=media&token=bb30f1f6-fbcd-46cc-a71f-f2ff4583fe7a'
                    alt='linkedin'/>
                  </a>
                </div>
                <div>
                  <a href='https://www.github.com/smudick' target="_blank" rel="noreferrer"><img className='aboutIcon'
                    src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/githubwhite.png?alt=media&token=9ea6f2dc-77cb-4960-a66d-71e3984ebba7'
                    alt='github'/></a>
                </div>
                <div>
                  <a href = "mailto: smudick@gmail.com" target="_blank" rel="noreferrer"><img className='aboutIcon'
                    src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/mail-512.png?alt=media&token=1b1666db-a25c-4a76-bd00-0cec14029578'
                    alt='email'/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
