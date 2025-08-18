import { User, GraduationCap, Laptop } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div className="glass-card-hover p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Ankit Kishor</h3>
                <p className="text-primary">Future Tech Innovator</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Education</h4>
                  <p className="text-muted-foreground">B.Tech in Computer Science</p>
                  <p className="text-sm text-muted-foreground">Lovely Professional University</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Laptop className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Specialization</h4>
                  <p className="text-muted-foreground">Cloud Computing & AI/ML</p>
                  <p className="text-sm text-muted-foreground">Building the future, one algorithm at a time</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-primary font-semibold">Ankit Kishor</span>, a passionate Computer Science student of B.Tech at{' '}
              <span className="text-secondary font-semibold">Lovely Professional University</span>. I completed my 10th and 12th from{' '}
              <span className="text-accent font-semibold">Magadh International School</span>.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I love building <span className="text-primary font-semibold">futuristic solutions</span> in{' '}
              <span className="text-secondary font-semibold">Cloud Computing</span>,{' '}
              <span className="text-accent font-semibold">Artificial Intelligence</span>, and{' '}
              <span className="text-primary font-semibold">Software Development</span>. My goal is to create technology that makes a meaningful impact on society.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-1">8+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;