import { ExternalLink, Github, Brain, Cloud, FileText, Database, Cpu, Code } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI Home Loan Eligibility Checker',
      description: 'Intelligent system using Python and machine learning to assess loan eligibility with real-time DBMS integration and API connectivity.',
      technologies: ['Python', 'Machine Learning', 'DBMS', 'APIs'],
      icon: Brain,
      gradient: 'from-primary to-secondary',
      features: ['Real-time processing', 'ML algorithms', 'Database integration']
    },
    {
      title: 'Resume Parsing Agent',
      description: 'FastAPI-powered application with Uvicorn server for multi-resume upload, parsing, and intelligent data extraction.',
      technologies: ['FastAPI', 'Uvicorn', 'Python', 'NLP'],
      icon: FileText,
      gradient: 'from-secondary to-accent',
      features: ['Multi-file upload', 'Smart parsing', 'Data extraction']
    },
    {
      title: 'Cloud File Storage System',
      description: 'Secure cloud-based file sharing platform built with AWS/Google Cloud infrastructure for seamless data management.',
      technologies: ['AWS', 'Google Cloud', 'Security', 'APIs'],
      icon: Cloud,
      gradient: 'from-accent to-primary',
      features: ['Cloud storage', 'Secure sharing', 'Scalable architecture']
    },
    {
      title: 'Cloud Resume Matching Agent',
      description: 'Real-time resume-job description comparison system using advanced algorithms and cloud computing technologies.',
      technologies: ['Cloud Computing', 'AI', 'Real-time Processing'],
      icon: Database,
      gradient: 'from-primary to-accent',
      features: ['Real-time matching', 'AI-powered', 'Cloud-based']
    },
    {
      title: 'IoT Cloud Dashboard',
      description: 'Comprehensive real-time sensor monitoring system with cloud integration for IoT device management.',
      technologies: ['IoT', 'Cloud Integration', 'Real-time Monitoring'],
      icon: Cpu,
      gradient: 'from-secondary to-primary',
      features: ['IoT integration', 'Real-time data', 'Cloud dashboard']
    },
    {
      title: 'DSA Solutions Library',
      description: 'Comprehensive collection of Data Structures and Algorithms solutions with optimized approaches and detailed explanations.',
      technologies: ['Algorithms', 'Data Structures', 'Optimization'],
      icon: Code,
      gradient: 'from-accent to-secondary',
      features: ['Optimized solutions', 'Detailed explanations', 'Multiple approaches']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Innovative solutions showcasing my expertise in Cloud Computing, AI, and Software Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <div
                key={index}
                className="glass-card-hover p-6 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-muted/20 text-primary border border-primary/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>

                {/* Hover effect indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;