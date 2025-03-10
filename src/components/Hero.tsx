import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-16 flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-softblue/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-softblue-light/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Transform Your Business with{' '}
                <span className="text-gradient">Digital Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                We create innovative software solutions, powerful websites, insightful data analytics, 
                and cutting-edge applications tailored to your business needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="premium-button bg-softblue hover:bg-softblue-dark text-white px-6 py-3 rounded-md font-medium transition-all inline-flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#services"
                className="bg-white hover:bg-gray-50 text-softblue-dark border border-gray-200 px-6 py-3 rounded-md font-medium transition-all inline-flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in animate-delay-400">
            <div className="relative z-10 glass-card p-4 overflow-hidden aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-softblue-light/10 to-softblue-dark/5 z-0"></div>
              <div className="relative z-10 h-full w-full rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Digital Technology"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating elements - Fixed positioning to prevent overlap */}
            <div className="absolute top-16 -left-8 glass-card p-3 animate-float shadow-lg z-20">
              <div className="w-10 h-10 bg-softblue rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xs font-medium mt-1">Premium Quality</p>
            </div>
            
            <div className="absolute bottom-16 -right-8 glass-card p-3 animate-float animate-delay-400 shadow-lg z-20">
              <div className="w-10 h-10 bg-softblue-light rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-xs font-medium mt-1">Fast Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
