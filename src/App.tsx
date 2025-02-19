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
                NeuroSpark
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
              Empowering Your Future with AI.
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              At NeuroSpark, we blend creative vision with technical excellence
              to craft bespoke AI solutions that drive innovation and unlock
              growth.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Discover More
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
              We fuse innovative thinking with deep industry expertise to create
              AI solutions that make a real impact.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Rocket className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Innovative Solutions
              </h3>
              <p className="mt-2 text-center text-gray-600">
                We harness cutting-edge technology to craft creative,
                game-changing AI experiences.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Expert Craftsmanship
              </h3>
              <p className="mt-2 text-center text-gray-600">
                Our dedicated team transforms complex challenges into
                opportunities with passion and precision.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <MessageSquare className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Always-On Support
              </h3>
              <p className="mt-2 text-center text-gray-600">
                We provide comprehensive, round-the-clock support to ensure your
                solutions never miss a beat.
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
                About NeuroSpark
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Founded with a vision to reshape the future of technology,
                NeuroSpark is driven by a passion for innovation. Our
                multidisciplinary team of engineers, designers, and strategists
                is dedicated to developing intelligent solutions that empower
                businesses to thrive in a rapidly evolving digital landscape.
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
                      A vibrant collective of innovators, engineers, and
                      creatives dedicated to advancing AI technology.
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
                      To drive innovation by delivering AI-powered solutions
                      that not only tackle today's challenges but also shape
                      tomorrow's possibilities.
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
              Ready to spark innovation? Reach out to us and start a
              conversation about transforming your business with AI.
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
                  <p className="mt-1 text-gray-600">contact@neurospark.ai</p>
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
                    456 Innovation Avenue, Tech City, TC 12345
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
                NeuroSpark
              </span>
            </div>
            <p className="text-gray-400">
              © 2025 NeuroSpark. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
