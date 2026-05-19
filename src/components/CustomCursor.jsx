import { useEffect, useRef, useState } from "react";

function CustomCursor() {
    const dotRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const onMove = (e) => {
            if (dotRef.current) {
                dotRef.current.style.transform =
                    `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        };

        const onOver = (e) => {
            if (e.target.closest("a, button, [role='button']")) {
                setHovered(true);
            }
        };

        const onOut = (e) => {
            if (e.target.closest("a, button, [role='button']")) {
                setHovered(false);
            }
        };
        const onLeaveWindow = () => {
                if (dotRef.current) {
                    dotRef.current.style.opacity = "0";
                }
            };

        const onEnterWindow = () => {
           if (dotRef.current) {
                dotRef.current.style.opacity = "1";
            }
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        document.addEventListener("mouseover", onOver);
        document.addEventListener("mouseout", onOut);
        document.addEventListener("mouseleave", onLeaveWindow);
        document.addEventListener("mouseenter", onEnterWindow);
        return () => {
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onOver);
            document.removeEventListener("mouseout", onOut);
            document.removeEventListener("mouseleave", onLeaveWindow);
            document.removeEventListener("mouseenter", onEnterWindow);
        };
    }, []);

    return (
        <div
            ref={dotRef}
            className={`custom-cursor${hovered ? " custom-cursor--hover" : ""}`}
            aria-hidden="true"
        />
    );
}

export default CustomCursor;
