import React from 'react';
import NewProjectCards from '../components/NewProjectCards';
import getProjects from '../helpers/data';
import Loader from './Loader';

export default class Projects extends React.Component {
  state = {
    projects: [],
    loading: true,
  };

  componentDidMount() {
    this.getProjectsToState();
  }

  getProjectsToState = () => {
    getProjects().then((response) => {
      const orderedProjects = response.sort((a, b) => ((a.order > b.order) ? 1 : -1));
      this.setState({
        projects: orderedProjects,
        loading: false,
      });
    });
  };

  render() {
    const { projects, loading } = this.state;
    const showProjects = () => projects.map((project) => (
        <NewProjectCards
          key={project.url}
          project={project}
          dark={this.props.dark}
        />
    ));
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <h2 className="projects-header">Projects</h2>
            <div className='d-flex flex-wrap justify-content-center'>
              {showProjects()}
            </div>
          </>
        )}
      </>
    );
  }
}
