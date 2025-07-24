import React from 'react'
import { Github, Linkedin, Mail, Globe } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome to My Hub
            </h1>
            <p className="text-xl text-gray-300">
              Developer • Creator • Innovator
            </p>
          </header>

          {/* Main Content */}
          <main className="grid md:grid-cols-2 gap-8 mb-16">
            {/* About Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate developer who loves building amazing digital experiences. 
                I specialize in modern web technologies and creating solutions that make a difference.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">React</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">JavaScript</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">TypeScript</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Node.js</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-white text-center mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Project Alpha",
                  description: "A modern web application built with React and Node.js",
                  tech: ["React", "Node.js", "MongoDB"]
                },
                {
                  title: "Project Beta",
                  description: "Mobile-first responsive design with advanced animations",
                  tech: ["React", "Framer Motion", "Tailwind"]
                },
                {
                  title: "Project Gamma",
                  description: "Full-stack e-commerce platform with payment integration",
                  tech: ["Next.js", "Stripe", "PostgreSQL"]
                }
              ].map((project, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <footer className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-6">Get In Touch</h2>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Globe size={24} />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App