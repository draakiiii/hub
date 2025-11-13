import React, { useState, useEffect } from 'react'
import { Store, BookOpen, Settings, Heart, List, Film, DollarSign, Users, Scissors, Moon, Sun } from 'lucide-react'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }
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
    },
    {
      id: 'money',
      name: 'Money',
      description: 'Gestión de dinero',
      url: 'https://money.draakiiii.com',
      icon: DollarSign,
      isNew: true
    },
    {
      id: 'lectura',
      name: 'Lectura',
      description: 'Lecturas conjuntas en grupo',
      url: 'https://lectura.draakiiii.com',
      icon: Users,
      isNew: true
    },
    {
      id: 'peluqueria',
      name: 'Peluquería',
      description: 'Aplicación IA para probar estilos de peinado',
      url: 'https://peluqueria.draakiiii.com',
      icon: Scissors,
      isNew: true
    }
  ]

  const handleAppClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="app-container">
      <div
        className="parallax-bg"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      />

      {/* Theme Toggle Button */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="container">
        {/* Header */}
        <header className="header">
          <h1 className="header-title">Draakiiii HUB</h1>
          <p className="header-subtitle">Tu centro de aplicaciones y herramientas</p>
        </header>

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
                {app.isNew && (
                  <div className="new-badge">Nuevo</div>
                )}
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
            Creado por{' '}
            <a
              href="https://twitter.com/draakiiii"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              @draakiiii
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App