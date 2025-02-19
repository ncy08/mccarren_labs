import React from "react";
import {
  Building2,
  Users,
  Rocket,
  MessageSquare,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                McCarren Labs
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a
                href="#solutions"
                className="text-gray-700 hover:text-blue-600"
              >
                Solutions
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 bg-gradient-to-r from-blue-600 to-blue-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Innovate. Transform. Succeed.
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              At McCarren Labs, we empower your business with tailor-made AI
              solutions that drive growth, enhance collaboration, and unlock new
              opportunities.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Sets Us Apart
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our custom AI solutions are built with a business-first mindset,
              ensuring that technology drives real results.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Rocket className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Strategic AI Consulting
              </h3>
              <p className="mt-2 text-center text-gray-600">
                We dive deep into your business challenges to identify
                opportunities where AI can make the biggest impact. From market
                analysis to a tailored roadmap, we ensure every strategy is
                aligned with your vision.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Custom AI Development
              </h3>
              <p className="mt-2 text-center text-gray-600">
                Every project is unique. We build solutions from the ground
                up—whether it’s a specialized machine learning model or a
                complete AI-powered application—crafted specifically for your
                industry needs.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <MessageSquare className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Seamless Integration & Design
              </h3>
              <p className="mt-2 text-center text-gray-600">
                From API development to full-scale implementation, we ensure
                your new AI tools integrate smoothly with your current systems
                to keep you ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About McCarren Labs
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                At McCarren Labs, we believe in harnessing the power of AI to
                transform the way businesses operate. Our expert team is
                committed to developing intelligent solutions that not only
                automate routine tasks but also empower your team to focus on
                what truly matters.
              </p>
              <div className="mt-8">
                <div className="flex items-center">
                  <img
                    className="h-96 w-full object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                    alt="Innovative workspace"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Team
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                      A passionate group of innovators, engineers, and
                      strategists dedicated to pushing the boundaries of AI
                      technology.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <Rocket className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Mission
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                      To empower businesses with AI-driven solutions that unlock
                      potential, enhance efficiency, and drive sustainable
                      growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to transform your business with AI? Let’s start a
              conversation.
            </p>
          </div>

          <div className="mt-20 max-w-lg mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Email</p>
                  <p className="mt-1 text-gray-600">contact@mccarrenlabs.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Phone</p>
                  <p className="mt-1 text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Location</p>
                  <p className="mt-1 text-gray-600">
                    1 N 4 Pl, Brooklyn, NY 11249
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">
                McCarren Labs
              </span>
            </div>
            <p className="text-gray-400">
              © 2025 McCarren Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
