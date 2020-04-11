import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className="view-project-btn">
        <Link
          to={{
            pathname: "/projectSubPage",
            state: {
              projectInfo: {
                name: props.name,
                projectLink: props.link,
                projectImg: props.img,
                projectDescription: props.description,
              },
            },
          }}
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
