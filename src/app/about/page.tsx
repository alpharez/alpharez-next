import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Alpharez
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pioneering the future of network infrastructure through intelligent automation 
              and AI-driven solutions that empower enterprises to scale with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Alpharez, we believe that network infrastructure should be a catalyst for innovation, 
                not a constraint. Our mission is to eliminate the complexity and manual overhead that 
                holds organizations back from achieving their digital transformation goals.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Through cutting-edge automation and AI technologies, we empower network engineers and 
                IT teams to focus on strategic initiatives while our intelligent systems handle the 
                routine, error-prone tasks that consume valuable time and resources.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">Pushing the boundaries of what&apos;s possible</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reliability</h4>
                    <p className="text-gray-600">Building systems you can depend on</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Efficiency</h4>
                    <p className="text-gray-600">Maximizing productivity and performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Partnership</h4>
                    <p className="text-gray-600">Your success is our success</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-700 mb-6">Networks Automated</p>
                
                <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
                <p className="text-gray-700 mb-6">Reduction in Deployment Time</p>
                
                <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                <p className="text-gray-700">Configuration Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines decades of network engineering expertise with cutting-edge 
              AI and automation knowledge to deliver unparalleled solutions.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg max-w-md">
              <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SC</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Steven Clement</h3>
              <p className="text-blue-600 font-medium mb-4">Founder & Lead Engineer</p>
              <p className="text-gray-600">
                Former Principal Network Architect at Fortune 500 companies with 15+ years 
                experience in large-scale network automation and infrastructure design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                Alpharez was born from a simple observation: network engineers spend too much time 
                on repetitive, manual tasks that could be automated, leaving little time for the 
                strategic work that drives business value.
              </p>
              <p>
                Our founders, having experienced this firsthand while managing large-scale networks 
                at enterprise organizations, recognized an opportunity to revolutionize how network 
                infrastructure is managed and operated.
              </p>
              <p>
                Since our founding in 2019, we&apos;ve helped hundreds of organizations transform their 
                network operations, reducing manual effort by up to 90% while significantly improving 
                reliability and security posture.
              </p>
              <p>
                Today, Alpharez continues to push the boundaries of what&apos;s possible with network 
                automation, integrating the latest advances in artificial intelligence and machine 
                learning to create truly intelligent infrastructure management solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation First</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of technology to solve complex challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Success</h3>
              <p className="text-gray-600">
                Your success is our primary metric. We&apos;re not satisfied until you are.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">
                We build systems that work consistently, even under the most demanding conditions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">
                Open communication and honest relationships form the foundation of our partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how Alpharez can help transform your network infrastructure 
            and accelerate your automation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get in Touch
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}