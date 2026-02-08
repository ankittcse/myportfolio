import { Code, Cloud, Database, Cpu, Zap, Globe } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'primary',
      skills: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'secondary',
      skills: ['AWS', 'Google Cloud', 'FastAPI', 'Uvicorn', 'Git', 'APIs']
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'accent',
      skills: ['DBMS', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Core Concepts',
      icon: Cpu,
      color: 'primary',
      skills: ['OOP', 'Data Structures', 'Algorithms', 'System Design']
    },
    {
      title: 'AI & Machine Learning',
      icon: Zap,
      color: 'secondary',
      skills: ['Machine Learning', 'AI Basics', 'Data Analysis', 'Neural Networks']
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'accent',
      skills: ['React', 'Node.js', 'REST APIs', 'Responsive Design']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <div
                key={index}
                className="glass-card-hover p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${category.color} to-${category.color}-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-bubble text-sm"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating skill bubbles */}
        <div className="relative h-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl animate-float">
              {['Python', 'AWS', 'Machine Learning', 'Java', 'Cloud Computing', 'AI', 'React', 'FastAPI'].map((skill, index) => (
                <div
                  key={index}
                  className="skill-bubble animate-particle-float"
                  style={{ 
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: `${8 + index}s`
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proficiency indicators */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: 'Python & Java Development', level: 80, color: 'primary' },
              { skill: 'Cloud Computing (AWS/Azure)', level: 85, color: 'secondary' },
              { skill: 'Database Management', level: 80, color: 'accent' },
              { skill: 'AI/ML Fundamentals', level: 85, color: 'primary' }
            ].map((item, index) => (
              <div key={index} className="glass-card p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className={`text-${item.color} font-semibold`}>{item.level}%</span>
                </div>
                <div className="w-full bg-muted/20 rounded-full h-2">
                  <div
                    className={`h-2 bg-gradient-to-r from-${item.color} to-${item.color}-glow rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;