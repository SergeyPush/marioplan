import React from "react";

const ProjectSummary = ({ project }) => {
  const { title } = project;

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>

        <p>Posted by Net Ninja</p>
        <p className="grey-text">3 September, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
