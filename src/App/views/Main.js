import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <About />
        <Skills />
        <Projects />
      </div>
    );
  }
}
