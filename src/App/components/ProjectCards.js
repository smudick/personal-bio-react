import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default class ProjectCard extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <div className='projects-image m-3'>
        <Card>
          <Image
            className='projects-image'
            src={project.screenshot}
          />
          <Card.Content>
            <Card.Header>{project.title}</Card.Header>
            <Card.Description>{project.description}</Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
