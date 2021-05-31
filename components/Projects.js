import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <Header sectionName="projects" />
      <div className="flex flex-col sm:flex-row">
        <ProjectCard bg="bg-project1" />
        <ProjectCard bg="bg-project2" />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
