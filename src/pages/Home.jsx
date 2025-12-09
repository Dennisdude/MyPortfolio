import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { DayBackground } from "../components/DayBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection"
import { About } from "../components/About"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { useEffect, useState } from "react";

export const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        if (!storedTheme) return true; // Default zu Dark Mode
        return storedTheme === "dark";
    });

    useEffect(() => {
        const root = document.documentElement;

        if (isDarkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

            {/* Background Effects*/}
            {isDarkMode ? <StarBackground /> : <DayBackground />}
            
            {/* Navbar */}
            <Navbar />

            {/* Main Section */}
            <main>
                <HeroSection />
                <About />
                <SkillsSection />
                {/*<ProjectSection />*/}
                <ContactSection />
            </main>

            {/* Footer */}
        </div>
    );
};