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
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      isMain: true
    },
    {
      id: 'books',
      name: 'Books',
      description: 'Gestión de librería con sistema de puntos',
      url: 'https://books.draakiiii.com',
      icon: BookOpen,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'gestion',
      name: 'Gestión',
      description: 'Gestión de pedidos de figuras',
      url: 'https://gestion.draakiiii.com',
      icon: Settings,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 'remigio',
      name: 'Remigio',
      description: 'Calculadora de puntos para baraja española',
      url: 'https://remigio.draakiiii.com',
      icon: Heart,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 'list',
      name: 'List',
      description: 'Gestión de listas con categorías',
      url: 'https://list.draakiiii.com',
      icon: List,
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 'movies',
      name: 'Movies',
      description: 'Watchlists de Letterboxd y selección de películas',
      url: 'https://movies.draakiiii.com',
      icon: Film,
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    }
  ]

  const handleAppClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="app-container">
      <div className="container">
        {/* Header */}
        <header className="header fade-in-up">
          <div className="logo-container">
            <Star className="logo-icon" />
          </div>
          <h1 className="title">Draakiiii HUB</h1>
          <p className="subtitle">
            Un centro de control moderno para acceder a todas las aplicaciones de Draakiiii desde un solo lugar
          </p>
        </header>

        {/* Main App - Featured */}
        <section className="section">
          <h2 className="section-title">Aplicación Principal</h2>
          <div className="text-center">
            {apps.filter(app => app.isMain).map((app) => (
              <div
                key={app.id}
                onClick={() => handleAppClick(app.url)}
                onMouseEnter={() => setHoveredApp(app.id)}
                onMouseLeave={() => setHoveredApp(null)}
                className="main-app-card fade-in-up"
              >
                <div className="card-content">
                  <div 
                    className="card-icon"
                    style={{ background: app.gradient }}
                  >
                    <app.icon />
                  </div>
                  <h3 className="card-title">{app.name}</h3>
                  <p className="card-description">{app.description}</p>
                  <div className="card-action">
                    <span>Acceder</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Apps Grid */}
        <section className="section">
          <h2 className="section-title">Otras Aplicaciones</h2>
          <div className="apps-grid">
            {apps.filter(app => !app.isMain).map((app, index) => (
              <div
                key={app.id}
                onClick={() => handleAppClick(app.url)}
                onMouseEnter={() => setHoveredApp(app.id)}
                onMouseLeave={() => setHoveredApp(null)}
                className="app-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-content">
                  <div 
                    className="card-icon"
                    style={{ background: app.gradient }}
                  >
                    <app.icon />
                  </div>
                  <h3 className="card-title">{app.name}</h3>
                  <p className="card-description">{app.description}</p>
                  <div className="card-action">
                    <span>Abrir</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-text">
            © 2024 Draakiiii HUB - Centro de control de aplicaciones
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App