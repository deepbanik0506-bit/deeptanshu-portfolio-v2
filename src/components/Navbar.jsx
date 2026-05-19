import logo from "../assets/db-logo.png";
function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">

                <div className="nav-logo">
                    <img src={logo} alt="DB Logo" />
                </div>

                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a
                        href="https://www.linkedin.com/in/deeptanshu-banik-95b208317/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link-btn"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/deepbanik0506-bit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link-btn"
                    >
                        GitHub
                    </a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;