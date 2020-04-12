import React from "react";

class ProjectSubPage extends React.Component {
  render() {
    return (
      <div className="project-sub-page-container">
        <h1 className="header">
          {this.props.projectInfo.location.state.projectInfo.name}
        </h1>
        <div>
          <div>
            <p>
              {
                this.props.projectInfo.location.state.projectInfo
                  .projectDescription
              }
            </p>
          </div>
          <div>
            <a href={this.props.projectInfo.location.state.projectInfo.projectLink} target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSubPage;
