import { useEffect, useState } from "react";

export default function useSize() {
    const [size, setSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 });

    function handleSize() {
        setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    useEffect(() => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleSize);
        return (() => {
            window.removeEventListener('resize', handleSize);
        })
    }, [])

    return { size: size };
}