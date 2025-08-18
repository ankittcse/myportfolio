import { ArrowDown, Download, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Ankit_Kishor_Resume.pdf";
    link.download = "Ankit_Kishor_Resume.pdf";
    link.click();
  };
  
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-indigo-900/20 pointer-events-none" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float pointer-events-none">
        <Sparkles className="w-8 h-8 text-primary-glow" />
      </div>
      <div
        className="absolute top-40 right-20 animate-float pointer-events-none"
        style={{ animationDelay: "2s" }}
      >
        <Sparkles className="w-6 h-6 text-secondary-glow" />
      </div>
      <div
        className="absolute bottom-32 left-20 animate-float pointer-events-none"
        style={{ animationDelay: "4s" }}
      >
        <Sparkles className="w-10 h-10 text-accent-glow" />
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto">
        {/* Main content */}
        <div className="animate-fade-in flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Profile Photo Circle */}
          <div className="relative order-1 lg:order-1">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/30 backdrop-blur-sm flex items-center justify-center relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <img
                src="/MyPicprofile.JPG"
                alt="Ankit Kishor"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = document.getElementById("initials-fallback");
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div
                id="initials-fallback"
                className="hidden w-full h-full rounded-full bg-gradient-to-br from-primary/10 to-accent/10 items-center justify-center"
              >
                <span className="text-6xl font-bold text-primary/60">AK</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30 animate-float pointer-events-none" />
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-secondary/30 animate-float pointer-events-none"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Text content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Hi, I'm Ankit Kishor
            </h1>
            <h2 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
              Aspiring Cloud & AI Engineer | B.Tech (CSE)
            </h2>
            <p className="text-base md:text-lg mb-8 text-muted-foreground font-light">
              Exploring the Future of Cloud and Artificial Intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <button
                onClick={scrollToProjects}
                className="btn-hero group flex items-center gap-3 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
              <button
                onClick={downloadResume}
                className="btn-ghost group flex items-center gap-3 cursor-pointer"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {isVisible && (
          <div
            onClick={scrollToProjects}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          >
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        )}
      </div>

      {/* Side decoration */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block pointer-events-none">
        <div className="glass-card p-8 space-y-4">
          {/* UPDATED: Added the "float" class for animation */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary animate-glow float" />
          <div
            className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent animate-glow float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary animate-glow float"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;