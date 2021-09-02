import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

export default class Main extends React.Component {
  state = {
    dark: false,
  }

  darkMode = () => {
    this.setState({
      dark: !(this.state.dark),
    });
  }

  render() {
    return (
      <div>
        {this.state.dark ? (
          <div className="dark">
          <About />
          <button type="button" className="btn btn-light m-2" onClick={() => this.darkMode()}>Light Mode</button>
          <Skills />
          <Projects dark={this.state.dark}/>
          </div>
        ) : (
          <div className="light">
          <About />
          <button type="button" className="btn btn-light m-2" onClick={() => this.darkMode()}>Dark Mode</button>
          <Skills />
          <Projects dark={this.state.dark}/>
          </div>
        )}
      </div>
    );
  }
}
