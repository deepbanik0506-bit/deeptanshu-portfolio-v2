import { motion } from "framer-motion";

function About() {
    return (
        <motion.section
            className="about"
            id="about"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="section-inner">

                <p className="section-label">About</p>

                <h2>
                    Data without context<br />is just noise.
                </h2>

                <div className="about-body">
                    <p>
                        My path into business analytics is driven by one consistent goal —
                        turning raw numbers into clarity that a business can act on. My focus
                        is the space between data and decisions: understanding what the numbers
                        reveal, and what should happen next because of them.
                    </p>
                    <p>
                        I work with Python, SQL, Excel, and data visualization tools, and I learn
                        by building. Every project adds a layer of rigor — moving closer to a Data
                        or Business Analyst role where analytical thinking sits at the center of
                        real decisions.
                    </p>
                </div>

            </div>
        </motion.section>
    );
}

export default About;