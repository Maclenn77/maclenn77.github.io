import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

const Project = ({ ...project }) => {
    return(
        <Card>
          <Card.Img variant ="top" src={project.img} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
              <div><Card.Text>Temporary</Card.Text></div>
            <Button href={project.live}>Check the project</Button>
            <Button href={project.code}>Check the code</Button>
          </Card.Body>
        </Card>
    )
}

export default Project;