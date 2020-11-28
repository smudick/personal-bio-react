import React from 'react';
import M from 'materialize-css';

export default class ProjectCard extends React.Component {
  render() {
    const { project } = this.props;
    return (
    <div class='m-2'>
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src={project.screenshot} alt={project.title}></img>
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">{project.title}<i class="material-icons right">more_vert</i></span>
          <p><a href={project.url} rel="noreferrer" target="_blank">Check it out!</a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">{project.title}<i class="material-icons right">close</i></span>
          <p>{project.description}</p>
          <p><a href={project.githubUrl} rel="noreferrer" target="_blank">GitHub Repo</a></p>
        </div>
      </div>
    </div>
    );
  }
}
