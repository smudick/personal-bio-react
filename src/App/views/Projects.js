import React from 'react';
import ProjectCard from '../components/ProjectCards';
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
      this.setState({
        projects: response,
        loading: false,
      });
    });
  };

  render() {
    const { projects, loading } = this.state;
    const showProjects = () => projects.map((project) => (
        <ProjectCard
          key={project.url}
          project={project}
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
