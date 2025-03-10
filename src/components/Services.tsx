
import { Globe, Computer, Database, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-8 w-8 text-softblue" />,
    title: "Website Development",
    description: "We create modern, responsive websites that engage your audience and drive conversions.",
    features: ["Custom Design", "Responsive", "SEO Optimization", "CMS Integration"]
  },
  {
    icon: <Computer className="h-8 w-8 text-softblue" />,
    title: "Software Development",
    description: "Custom software solutions to streamline your business processes and improve efficiency.",
    features: ["Custom Applications", "Legacy System Integration", "Cloud Solutions", "Support & Maintenance"]
  },
  {
    icon: <Database className="h-8 w-8 text-softblue" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights to make informed business decisions.",
    features: ["Data Visualization", "Predictive Analytics", "Business Intelligence", "Big Data Solutions"]
  },
  {
    icon: <Smartphone className="h-8 w-8 text-softblue" />,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that provide seamless experiences across all devices.",
    features: ["iOS & Android", "Native Apps", "Cross-Platform", "Ongoing Support"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground">
            We provide end-to-end solutions tailored to your business requirements, helping you stay ahead in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`service-card glass-card p-8 animate-slide-in-left animate-delay-${index * 200}`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  {service.icon}
                  <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </div>
                
                <div className="mt-auto">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <svg className="w-4 h-4 mr-2 text-softblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#contact" 
                  className="mt-6 inline-flex items-center text-softblue hover:text-softblue-dark font-medium text-sm"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
