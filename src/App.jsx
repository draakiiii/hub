import React from 'react'
import { Store, BookOpen, Settings, Heart, List, Film } from 'lucide-react'

function App() {
  const apps = [
    {
      id: 'store',
      name: 'Draakiiii Store',
      description: 'Tienda de figuras de resina',
      url: 'https://draakiiii.com',
      icon: Store
    },
    {
      id: 'books',
      name: 'Books',
      description: 'Gestión de librería con sistema de puntos',
      url: 'https://books.draakiiii.com',
      icon: BookOpen
    },
    {
      id: 'gestion',
      name: 'Gestión',
      description: 'Gestión de pedidos de figuras',
      url: 'https://gestion.draakiiii.com',
      icon: Settings
    },
    {
      id: 'remigio',
      name: 'Remigio',
      description: 'Calculadora de puntos para baraja española',
      url: 'https://remigio.draakiiii.com',
      icon: Heart
    },
    {
      id: 'list',
      name: 'List',
      description: 'Gestión de listas con categorías',
      url: 'https://list.draakiiii.com',
      icon: List
    },
    {
      id: 'movies',
      name: 'Movies',
      description: 'Watchlists de Letterboxd y selección de películas',
      url: 'https://movies.draakiiii.com',
      icon: Film
    }
  ]

  const handleAppClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="app-container">
      <div className="container">
        {/* Apps Grid */}
        <section className="section">
          <div className="apps-grid">
            {apps.map((app, index) => (
              <div
                key={app.id}
                onClick={() => handleAppClick(app.url)}
                className="app-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-content">
                  <div className="card-icon">
                    <app.icon />
                  </div>
                  <h3 className="card-title">{app.name}</h3>
                  <p className="card-description">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-text">
            © 2024 Draakiiii HUB
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App