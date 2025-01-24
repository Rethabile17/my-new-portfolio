import React, { useState } from "react";
import "./Projects.css";

function Projects() {
 
  const projectData = [
   
    {
      name: "Recipe App",
      type: "individual",
      description: "A recipe application with features to add, edit, and search for recipes.",
      techStack: ["React", "Node.js", "MongoDB"],
      repoLink:"https://github.com/Rethabile17/RecipeAppwithMongoDBAndNode"
    },
    {
      name: "E-commerce Store",
      type: "individual",
      description: "An online store built with teammates to learn full-stack development.",
      techStack: ["React", "Firebase", "Stripe"],
      repoLink:"https://github.com/Rethabile17/onlinemarketplace"
    },
    {
      name: "Hotel  App",
      type: "individual",
      description: "Collaborative project to create a hotel booking application.",
      techStack: ["React", "Redux", "Firebase"],
      repoLink:"https://github.com/Rethabile17/react-hotel-app"
    },
    {
      name: "Quiz App",
      type: "individual",
      description:
        "An application where users can take quizzes on various topics, with scoring and progress tracking.",
      techStack: ["React", "Firebase", "CSS"],
      repoLink:"https://github.com/Rethabile17/quiz-app"
    },
    {
      name: "Shopping List App",
      type: "individual",
      description:
        "A simple app to help users create and manage their shopping lists, with real-time updates.",
      techStack: ["React", "Redux", "Firebase"],
      repoLink:"https://github.com/Rethabile17/Shopping-List-App-with-Redux"
    },
    {
      name: "Weather App",
      type: "individual",
      description:
        "An app that fetches and displays current weather conditions for a selected city using live APIs.",
      techStack: ["React", "Node.js", "OpenWeather API", "CSS"],
      repoLink:"https://github.com/Rethabile17/weather-app"
    },
    {
      name: "Restaurants App",
      type: "group",
      description:
        "A collaborative project to create a platform for discovering and reviewing local restaurants.",
      techStack: ["React", "MongoDB", "Node.js", "Express", "Redux"],
      repoLink:"https://github.com/Rethabile17/Restaurant-Reservation-app"
    },
  ];

                                         
  const [filter, setFilter] = useState("all");

 
  const filteredProjects = projectData.filter(
    (project) => filter === "all" || project.type === filter
  );

  return (
    <div className="projectsContainer" id="projects">
      <h2 className="projectsTitle">My Projects</h2>

    
      <div className="filterButtons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "individual" ? "active" : ""}
          onClick={() => setFilter("individual")}
        >
          Individual
        </button>
        <button
          className={filter === "group" ? "active" : ""}
          onClick={() => setFilter("group")}
        >
          Group
        </button>
      </div>

     
      <div className="projectsGrid">
        {filteredProjects.map((project, index) => (
          <a href={project.repoLink}>
          <div className="projectCard" key={index}>
            <h3 className="projectName">{project.name}</h3>
            <p className="projectType">{project.type === "individual" ? "Individual Project" : "Group Project"}</p>
            <p className="projectDescription">{project.description}</p>
            <div className="projectTechStack">
              {project.techStack.map((tech, techIndex) => (
                <span className="techBadge" key={techIndex}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
