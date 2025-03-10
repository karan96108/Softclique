
const projects = [
  {
    title: "E-Commerce Platform",
    category: "Website Development",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A fully responsive e-commerce platform with advanced filtering and payment integration."
  },
  {
    title: "Healthcare Management System",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Custom software for healthcare providers to manage patient records and appointments."
  },
  {
    title: "Financial Analytics Dashboard",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Interactive dashboard providing real-time insights into financial performance metrics."
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Cross-platform mobile application for tracking workouts and nutrition with social features."
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground">
            Explore some of our recent projects and see how we've helped our clients achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`glass-card overflow-hidden hover-scale animate-fade-in animate-delay-${index * 200}`}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs font-medium bg-softblue/10 text-softblue px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <a 
                  href="#" 
                  className="mt-4 inline-flex items-center text-softblue hover:text-softblue-dark font-medium text-sm"
                >
                  View Case Study
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="premium-button inline-flex items-center justify-center bg-softblue hover:bg-softblue-dark text-white px-6 py-3 rounded-md font-medium transition-all"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
