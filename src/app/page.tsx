
import AnimatedSection from '@/components/AnimatedSection';
import FeatureCard from '@/components/FeatureCard';
import ProductCard from '@/components/ProductCard';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const capabilities = [
    {
      icon: "Shield",
      title: "V-1 Tactical Recon",
      description: "Stealth reconnaissance UAV with extended flight time and all-weather capability",
      features: ["8+ hour endurance", "360° EO/IR imaging", "Encrypted datalink", "AI-powered tracking"]
    },
    {
      icon: "Zap",
      title: "V-2 Heavy Lift",
      description: "High-payload delivery system for critical logistics and emergency response",
      features: ["50kg payload capacity", "VTOL capability", "150km operational range", "Redundant flight systems"]
    },
    {
      icon: "Target",
      title: "V-3 Autonomous Swarm",
      description: "Coordinated multi-drone systems for complex mission profiles",
      features: ["AI swarm intelligence", "Mesh communication", "Dynamic task allocation", "Self-healing networks"]
    },
    {
      icon: "Brain",
      title: "V-4 AI Command",
      description: "Advanced command and control platform with predictive analytics",
      features: ["Real-time battlefield AI", "Predictive threat analysis", "Automated mission planning", "Secure cloud integration"]
    }
  ];

  const highlights = [
    {
      icon: "Wifi",
      title: "Military-Grade Encryption",
      description: "Quantum-resistant communication protocols"
    },
    {
      icon: "Satellite",
      title: "Global SATCOM Integration",
      description: "Worldwide operational capability beyond-line-of-sight"
    },
    {
      icon: "Camera",
      title: "Multi-Sensor Fusion",
      description: "Integrated EO/IR/LiDAR for comprehensive situational awareness"
    },
    {
      icon: "Navigation",
      title: "GNSS-Denied Navigation",
      description: "Autonomous operation in GPS-compromised environments"
    }
  ];

  return (
    <main className="min-h-screen">
      <HeroSection />
    
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              <span className="text-gradient">Mission Critical</span> Reliability
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-2xl md:text-3xl font-light text-gray-300 mb-6 leading-relaxed">
                VyomGarud delivers <span className="text-orange-500 font-semibold">unmatched aerial superiority</span> through cutting-edge UAV technology.
              </p>
              <p className="text-gray-400 text-lg">
                We engineer drone systems that operate with precision in the world&apos;s most demanding environments. Our solutions are trusted by defense forces, security agencies, and critical infrastructure operators globally.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-500">99.7%</div>
                    <div className="text-sm text-gray-400 mt-2">Operational Reliability</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-500">24/7</div>
                    <div className="text-sm text-gray-400 mt-2">Mission Support</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-500">150+</div>
                    <div className="text-sm text-gray-400 mt-2">Successful Deployments</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-500">&lt;0.1m</div>
                    <div className="text-sm text-gray-400 mt-2">Positional Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-gradient-to-b from-gray-900/50 to-gray-900">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Advanced <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Engineered for excellence across diverse operational requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <ProductCard
                key={index}
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
                features={capability.features}
                delay={index * 0.1}
              />
            ))}
          </div>
        </AnimatedSection>
      </section>


      <section className="py-20 px-4 max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Technical <span className="text-gradient">Superiority</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Features that define the next generation of unmanned systems
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <FeatureCard
                key={index}
                icon={highlight.icon}
                title={highlight.title}
                description={highlight.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </AnimatedSection>
      </section>


      <section className="py-20 px-4 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-700 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Ready for <span className="text-gradient">Strategic Partnership?</span>
              </h2>
              <p className="text-xl text-gray-400">
                Contact our team for detailed specifications and demonstrations
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="Your Organization"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="john@organization.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
              >
                Request Technical Briefing
              </button>
            </form>
          </div>
        </AnimatedSection>
      </section>


      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold font-heading flex items-center">
                <span className="text-gradient">VYOM</span>
                <span className="text-white">GARUD</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Advanced Unmanned Aerial Systems
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} VyomGarud Defense Systems. All rights reserved.
              </p>
              <p className="text-gray-600 text-sm mt-1">
                ISO 9001:2015 Certified | MIL-STD-810G Compliant
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-600 text-sm">
              For authorized government and defense personnel only. Export controlled technology.
            </p>
            <p className="text-gray-500 text-sm mt-2">Made by Manya Shukla</p>
          </div>
        </div>
      </footer>
    </main>
  );
}