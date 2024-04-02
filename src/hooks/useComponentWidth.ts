import { useState, useEffect, useRef } from "react";

const useComponentWidth = () => {
    const [componentWidth, setComponentWidth] = useState(0); // Initialize with 0
    const componentRef = useRef(null); // Reference to the component

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target === componentRef.current) {
                    setComponentWidth(entry.contentRect.width);
                }
            }
        });

        if (componentRef.current) {
            resizeObserver.observe(componentRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, [componentRef]);

    return { componentWidth, componentRef };
};

export default useComponentWidth;
