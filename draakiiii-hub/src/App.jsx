import { useState } from 'react'
import { 
  BookOpen, 
  ShoppingCart, 
  Cards, 
  List, 
  Film, 
  Store,
  ExternalLink,
  Star
} from 'lucide-react'

function App() {
  const [hoveredApp, setHoveredApp] = useState(null)

  const applications = [
    {
      id: 'store',
      name: 'Draakiiii Store',
      description: 'Mi tienda de figuras de resina',
      domain: 'draakiiii.com',
      icon: Store,
      color: 'bg-purple-500',
      hoverColor: 'bg-purple-600',
      featured: true
    },
    {
      id: 'books',
      name: 'Books',
      description: 'Gestión de librería con sistema de puntos y recompensas',
      domain: 'books.draakiiii.com',
      icon: BookOpen,
      color: 'bg-blue-500',
      hoverColor: 'bg-blue-600'
    },
    {
      id: 'gestion',
      name: 'Gestión',
      description: 'Gestión de pedidos de figuras de resina',
      domain: 'gestion.draakiiii.com',
      icon: ShoppingCart,
      color: 'bg-green-500',
      hoverColor: 'bg-green-600'
    },
    {
      id: 'remigio',
      name: 'Remigio',
      description: 'Calculadora de puntos para el juego de baraja española',
      domain: 'remigio.draakiiii.com',
      icon: Cards,
      color: 'bg-red-500',
      hoverColor: 'bg-red-600'
    },
    {
      id: 'lists',
      name: 'Lists',
      description: 'Gestión de listas con categorías',
      domain: 'lists.draakiiii.com',
      icon: List,
      color: 'bg-yellow-500',
      hoverColor: 'bg-yellow-600'
    },
    {
      id: 'movies',
      name: 'Movies',
      description: 'Watchlists de Letterboxd y selección de películas con amigos',
      domain: 'movies.draakiiii.com',
      icon: Film,
      color: 'bg-indigo-500',
      hoverColor: 'bg-indigo-600'
    }
  ]

  const handleAppClick = (domain) => {
    window.open(`https://${domain}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Draakiiii HUB</h1>
              <p className="text-gray-600 mt-1">Centro de control de aplicaciones</p>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-500" />
              <span className="text-sm text-gray-500">v1.0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured App */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Aplicación Principal</h2>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {applications.filter(app => app.featured).map((app) => {
              const IconComponent = app.icon
              return (
                <div
                  key={app.id}
                  className="card p-6 cursor-pointer transform hover:scale-105 transition-all duration-300"
                  onClick={() => handleAppClick(app.domain)}
                  onMouseEnter={() => setHoveredApp(app.id)}
                  onMouseLeave={() => setHoveredApp(null)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${app.color} ${hoveredApp === app.id ? app.hoverColor : app.color} transition-colors duration-200`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{app.name}</h3>
                      <p className="text-gray-600 mt-1">{app.description}</p>
                      <p className="text-sm text-gray-500 mt-2">{app.domain}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Other Apps */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Otras Aplicaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.filter(app => !app.featured).map((app) => {
              const IconComponent = app.icon
              return (
                <div
                  key={app.id}
                  className="card p-6 cursor-pointer transform hover:scale-105 transition-all duration-300"
                  onClick={() => handleAppClick(app.domain)}
                  onMouseEnter={() => setHoveredApp(app.id)}
                  onMouseLeave={() => setHoveredApp(null)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${app.color} ${hoveredApp === app.id ? app.hoverColor : app.color} transition-colors duration-200`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{app.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{app.description}</p>
                      <p className="text-xs text-gray-500 mt-2">{app.domain}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-500">
            <p>© 2024 Draakiiii HUB - Todos los derechos reservados</p>
            <p className="text-sm mt-1">Desarrollado con React y Tailwind CSS</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
