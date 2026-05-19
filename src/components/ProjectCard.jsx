import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
    const num = String(index + 1).padStart(2, "0");

    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
        >
            {/* Index number */}
            <span className="project-index">{num}</span>

            {/* Main body */}
            <div className="project-body">

                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* Outcomes */}
                <div className="project-outcomes">
                    <p className="project-outcomes-label">Measured Outcomes</p>
                    <div className="project-outcome-list">
                        {project.metrics.map((metric, i) => (
                            <div key={i} className="project-outcome-item">
                                <span className="outcome-arrow">→</span>
                                <span>{metric}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Insight */}
                <div className="project-insight">
                    <p className="project-insight-label">Key Insight</p>
                    <p>{project.insight}</p>
                </div>

                {/* Footer: stack + link */}
                <div className="project-footer">
                    <div className="project-stack">
                        {project.stack.map((tech, i) => (
                            <span key={i}>
                                <span className="stack-item">{tech}</span>
                                {i < project.stack.length - 1 && (
                                    <span className="stack-sep">·</span>
                                )}
                            </span>
                        ))}
                    </div>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                    >
                        View Analysis ↗
                    </a>
                </div>

            </div>
        </motion.div>
    );
}

export default ProjectCard;