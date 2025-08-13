import { useEffect, useState } from "react";

// star: id, size, x, y, opacity, animationDuration
// meteor: id, size, x, y, delay, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])

    useEffect(() => {
        gererateStars()
        gererateMeteors()

        const handleResize = () => {
            gererateStars()
        };

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const gererateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        )

        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }

        setStars(newStars)
    }

    const gererateMeteors = () => {
        const numberOfMeteors = 5
        const newMeterors = []

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeterors.push({
                id:i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 80,
                opacity: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            })
        }

        setMeteors(newMeterors)
    }

    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div 
                key={star.id} 
                className="star animate-pulse-subtle" 
                style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }}
            />
        ))}

        {meteors.map((meteor) => (
            <div 
                key={meteor.id} 
                className="meteor animate-meteor" 
                style={{
                    width: meteor.size * 30 + "px",
                    height: meteor.size + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDelay: meteor.opacity,
                    animationDuration: meteor.animationDuration + "s",
                }}
            />
        ))}
    </div>;
};