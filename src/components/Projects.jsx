import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ecommerceDashboard from "../assets/ecommerce-dashboard.png";

function Projects() {
    const formattedProjects = projects.map((project) => ({
        ...project,
        image: project.image === "local" ? ecommerceDashboard : project.image,
    }));

    return (
        <section className="projects" id="projects">
            <div className="section-inner">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="section-label">Case Studies</p>

                    <div className="projects-header">
                        <h2>Projects</h2>
                        <span className="projects-count">
                            {String(formattedProjects.length).padStart(2, "0")} entries
                        </span>
                    </div>

                    <div className="projects-divider" />
                </motion.div>

                {formattedProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                    />
                ))}

            </div>
        </section>
    );
}

export default Projects;