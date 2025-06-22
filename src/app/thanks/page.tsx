export default function Thanks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your message has been successfully sent. We appreciate your interest in 
              Alpharez and will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here&apos;s what you can expect from the Alpharez team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Initial Review
              </h3>
              <p className="text-gray-600">
                We&apos;ll review your message and requirements to understand your 
                specific network automation needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Personal Response
              </h3>
              <p className="text-gray-600">
                Our team will reach out within 24 hours to discuss your project 
                and schedule a consultation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Custom Proposal
              </h3>
              <p className="text-gray-600">
                We&apos;ll provide a detailed proposal tailored to your infrastructure 
                and automation goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            While You Wait
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Learn more about our services and how we help enterprises transform 
            their network infrastructure with AI-driven automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Explore Our Services
            </a>
            <a 
              href="/about" 
              className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-lg border-2 border-blue-600 transition-colors"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}