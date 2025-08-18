import { BookOpen, Award, School } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      institution: 'Magadh International School',
      degree: 'Class 10 (CBSE)',
      description: 'Strong foundation in science and mathematics',
      icon: BookOpen,
      color: 'primary'
    },
    {
      institution: 'Magadh International School',
      degree: 'Class 12 (CBSE)',
      description: 'Specialized in Physics, Chemistry, Mathematics, and Computer Science',
      icon: Award,
      color: 'secondary'
    },
    {
      year: '2023-2027',
      institution: 'Lovely Professional University',
      degree: 'B.Tech in Computer Science',
      description: 'Currently in 3rd Year, focusing on Cloud Computing and AI',
      icon: School,
      color: 'accent'
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 timeline-line transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 timeline-dot w-6 h-6 transform md:-translate-x-1/2 z-10">
                    <Icon className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="glass-card-hover p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${item.color} to-${item.color}-glow flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{item.year}</div>
                          <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
                        </div>
                      </div>
                      
                      <h4 className={`text-lg font-semibold text-${item.color} mb-2`}>
                        {item.institution}
                      </h4>
                      
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>

                      {/* Achievement indicators */}
                      <div className="mt-4 flex gap-2">
                        <div className={`w-2 h-2 rounded-full bg-${item.color} animate-pulse`} />
                        <div className={`w-2 h-2 rounded-full bg-${item.color} animate-pulse`} style={{ animationDelay: '0.5s' }} />
                        <div className={`w-2 h-2 rounded-full bg-${item.color} animate-pulse`} style={{ animationDelay: '1s' }} />
                      </div>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;