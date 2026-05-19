import logo from "../assets/db-logo.png";

function Loader() {
    return (
        <div className="loader-screen">
            <div className="loader-content">
                <img src={logo} alt="DB Logo" className="loader-logo" />
            </div>
        </div>
    );
}

export default Loader;