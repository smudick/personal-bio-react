import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';

export default class About extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center'>
        <div className='d-flex justify-content-lg-around m-3 about-section'>
          <img
            className='pic'
            src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/self-photo.jpeg?alt=media&token=4f887793-09d3-4770-960f-c516a784d2a1'
            alt='sam'
          ></img>
          <div className='d-flex flex-column intro'>
            <h2>Hello!</h2>
            <p>
              I'm Sam, a full stack developer living in Nashville. Thanks for
              visiting my site! Please take a moment to have a look around and
              check out all the things I've been working on. If you see anything
              you like, or have any questions, feel free to reach out on <a href='https://www.linkedin.com/in/sammudick'target="_blank" rel="noreferrer">LinkedIn</a>, <a href='https://www.github.com/smudick' target="_blank" rel="noreferrer">GitHub</a> or send me an <a href = "mailto: smudick@gmail.com" target="_blank" rel="noreferrer">email</a>!
            </p>
          </div>
        </div>

        <div className='about'>
          <h4>A little more about me</h4>
          <p>
            I'm originally from Phoenix but have been living in Nashville for
            the past 10 years. I have worked in various fields from audio
            engineering, home automation, and information technology since
            graduating from Belmont University. I am currently a student at
            Nashville Software School and am learning to become a full stack
            developer. I love development because it combines creativity and
            problem solving in a really fun and challenging way. I am very
            excited to learn and grow more as a developer! When I'm not
            developing I like to travel, play and watch soccer, brew beer, and
            go on hikes with my wife Dani and my dog Pepper.
          </p>
        </div>
      </div>
    );
  }
}
