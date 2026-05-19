import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CustomCursor from "./components/CustomCursor";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 4200);

    return () => clearTimeout(timer);
}, []);
  return (
    <>
        {loading && <Loader />}

        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Projects />
    </>
);
}

export default App;
