import React from "react";

// Import project image dynamically
import projectImage from "../../../assets/projects/projects.png";

// Import project data
import projects from "../../data/projects.json";

export const Project = () => {
  // Map the "imageSrc" key to the correct image
  const imageMap = {
    project: projectImage, // Add more mappings if needed
  };

  return (
    <section 
        id="projects" 
      style={{
        padding: "40px 20px",
        backgroundColor: "#0b1229",
        borderRadius: "8px",
        maxWidth: "1200px", // Same as experience section
        margin: "0 auto", // Centering the container
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          color: "#fff", // Set heading color to white
          marginBottom: "30px",
        }}
      >
        Projects
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          justifyItems: "center",
        }}
      >
        {projects.map((project, id) => (
          <div
            key={id}
            style={{
              backgroundColor: "#1a243d",
              padding: "20px",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#fff", // Set default text color to white
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={imageMap[project.imageSrc]}
              alt={`Image of ${project.title}`}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                margin: "10px 0",
                fontSize: "20px",
                color: "#fff", // Set title color to white
                textAlign: "center",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#fff", // Set description color to white
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              {project.description}
            </p>
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
                margin: "10px 0",
                padding: "0",
                listStyle: "none",
              }}
            >
              {project.skills.map((skill, skillId) => (
                <li
                  key={skillId}
                  style={{
                    backgroundColor: "#000", // Set skill background to black
                    color: "#fff", // Set skill text color to white
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
            <a
              href="https://github.com/sheetaljatav"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "10px",
                fontWeight: "bold",
                backgroundColor: "#000", // Set button background to black
                color: "#fff", // Set button text color to white
                fontSize: "18px",
                padding: "8px 15px",
                borderRadius: "5px",
                textAlign: "center",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#222";
                e.target.style.color = "#ccc";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#000";
                e.target.style.color = "#fff";
              }}
            >
              Source
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
