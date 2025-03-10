
import { Code, ChartBar, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                About <span className="text-gradient">Softclique Technologies</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Since our inception, we've been passionate about creating innovative digital solutions that help businesses thrive in an ever-evolving technological landscape.
              </p>
              
              <p className="text-muted-foreground">
                Our team of experts combines technical excellence with creative thinking to deliver solutions that not only meet but exceed our clients' expectations. We believe in building long-term partnerships with our clients, understanding their unique challenges, and crafting solutions that drive real business results.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-softblue">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-fade-in animate-delay-400">
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage.
              </p>
            </div>

            <div className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading technology partner for businesses worldwide, known for excellence, innovation, and client satisfaction.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center p-3">
                  <Code className="h-6 w-6 text-softblue mb-2" />
                  <h4 className="font-medium">Innovation</h4>
                </div>
                <div className="flex flex-col items-center text-center p-3">
                  <ChartBar className="h-6 w-6 text-softblue mb-2" />
                  <h4 className="font-medium">Excellence</h4>
                </div>
                <div className="flex flex-col items-center text-center p-3">
                  <Globe className="h-6 w-6 text-softblue mb-2" />
                  <h4 className="font-medium">Integrity</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
