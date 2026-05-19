import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function Hero() {
    return (
        <section className="hero">
            <div className="section-inner">
                <motion.div
                    style={{ display: "contents" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    {/* LEFT — Photo + Identity */}
                    <motion.div
                        className="hero-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                    >
                        <div className="hero-image">
                            <img src={profile} alt="Deeptanshu Banik" />
                        </div>
                        <div>
                            <p className="hero-name">Deeptanshu (Deep) Banik</p>
                            <p className="hero-name-role">
                                Computer Science Engineering <br />
                                Specializing in AI &amp; Robotics
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT — Content */}
                    <motion.div
                        className="hero-right"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <p className="section-label">Business Analytics · Machine Learning</p>

                        <h1 className="hero-headline">
                            Numbers tell stories.{" "}
                            <span className="hero-headline-muted">
                                I make sure those stories drive decisions.
                            </span>
                        </h1>

                        <p className="hero-body">
                            Focused on the space between data and decisions — extracting what
                            the numbers reveal, and determining what should happen next because
                            of them. Working in Python, SQL, and machine learning to build
                            analytical systems with measurable business impact.
                        </p>

                        <div className="hero-rule" />

                        <p className="hero-meta-label">Contact</p>

                        <div className="hero-contact">
                            <a href="mailto:deepbanik0506@gmail.com">deepbanik0506@gmail.com</a>
                            <span>+91 99013 33662</span>
                        </div>

                        <div className="hero-actions">
                            <a href="#projects" className="hero-btn-primary">
                                View Case Studies ↓
                            </a>
                            <a
                                href="https://github.com/deepbanik0506-bit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-btn-ghost"
                            >
                                GitHub ↗
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
