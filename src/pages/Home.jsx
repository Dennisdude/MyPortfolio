import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection"
import { About } from "../components/About"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects*/}
            <StarBackground />
            
            {/* Navbar */}
            <Navbar />

            {/* Main Section */}
            <main>
                <HeroSection />
                <About />
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
            </main>

            {/* Footer */}
        </div>
    );
};