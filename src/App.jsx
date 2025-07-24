import React, { useState } from 'react'
import { ExternalLink, Store, BookOpen, Settings, Heart, List, Film, Star, ArrowRight } from 'lucide-react'

function App() {
  const [hoveredApp, setHoveredApp] = useState(null)

  const apps = [
    {
      id: 'store',
      name: 'Draakiiii Store',
      description: 'Tienda de figuras de resina',
      url: 'https://draakiiii.com',
      icon: Store,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      isMain: true
    },
    {
      id: 'books',
      name: 'Books',
      description: 'Gestión de librería con sistema de puntos',
      url: 'https://books.draakiiii.com',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'gestion',
      name: 'Gestión',
      description: 'Gestión de pedidos de figuras',
      url: 'https://gestion.draakiiii.com',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 'remigio',
      name: 'Remigio',
      description: 'Calculadora de puntos para baraja española',
      url: 'https://remigio.draakiiii.com',
      icon: Heart,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      id: 'lists',
      name: 'Lists',
      description: 'Gestión de listas con categorías',
      url: 'https://lists.draakiiii.com',
      icon: List,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      id: 'movies',
      name: 'Movies',
      description: 'Watchlists de Letterboxd y selección de películas',
      url: 'https://movies.draakiiii.com',
      icon: Film,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    }
  ]

  const handleAppClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-2xl">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Draakiiii HUB
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Un centro de control moderno para acceder a todas las aplicaciones de Draakiiii desde un solo lugar
            </p>
          </header>

          {/* Main App - Featured */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">Aplicación Principal</h2>
            <div className="flex justify-center">
              {apps.filter(app => app.isMain).map((app) => (
                <div
                  key={app.id}
                  onClick={() => handleAppClick(app.url)}
                  onMouseEnter={() => setHoveredApp(app.id)}
                  onMouseLeave={() => setHoveredApp(null)}
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                >
                  <div className={`relative p-8 rounded-3xl ${app.bgColor} ${app.borderColor} border-2 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 max-w-md`}>
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${app.color} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <app.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{app.name}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{app.description}</p>
                      <div className="flex items-center text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                        <span className="mr-2">Acceder</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Other Apps Grid */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">Otras Aplicaciones</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {apps.filter(app => !app.isMain).map((app) => (
                <div
                  key={app.id}
                  onClick={() => handleAppClick(app.url)}
                  onMouseEnter={() => setHoveredApp(app.id)}
                  onMouseLeave={() => setHoveredApp(null)}
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                >
                  <div className={`relative p-6 rounded-2xl ${app.bgColor} ${app.borderColor} border backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 h-full`}>
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${app.color} rounded-xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <app.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{app.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{app.description}</p>
                      <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <span className="text-xs mr-2">Abrir</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center mt-16 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              © 2024 Draakiiii HUB - Centro de control de aplicaciones
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App