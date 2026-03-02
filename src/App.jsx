import React, { useState, useEffect } from 'react'

function App() {
  const [visitorCount] = useState(Math.floor(Math.random() * 900000) + 100000)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink(prev => !prev), 500)
    return () => clearInterval(blinkTimer)
  }, [])

  const apps = [
    {
      id: 'store',
      name: '🛒 draakiiii Store',
      description: '¡¡Tienda de figuras de resina!! ¡¡COMPRA YA!!',
      url: 'https://draakiiii.com',
      color: '#FF00FF',
      bgColor: '#FFFF00',
      isHot: true
    },
    {
      id: 'books',
      name: '📚 Books',
      description: 'Gestión de librería con sistema de puntos ★★★',
      url: 'https://books.draakiiii.com',
      color: '#0000FF',
      bgColor: '#00FF00',
    },
    {
      id: 'gestion',
      name: '⚙️ Gestión',
      description: 'Gestión de pedidos de figuras',
      url: 'https://gestion.draakiiii.com',
      color: '#FF0000',
      bgColor: '#CCCCFF',
    },
    {
      id: 'remigio',
      name: '♥️ Remigio',
      description: 'Calculadora de puntos para baraja española ♠♣♦♥',
      url: 'https://remigio.draakiiii.com',
      color: '#006600',
      bgColor: '#FFCCCC',
    },
    {
      id: 'list',
      name: '📋 List',
      description: 'Gestión de listas con categorías - ¡ORGANÍZATE!',
      url: 'https://list.draakiiii.com',
      color: '#800080',
      bgColor: '#CCFFCC',
    },
    {
      id: 'movies',
      name: '🎬 Movies',
      description: 'Watchlists de Letterboxd y selección de películas 🍿',
      url: 'https://movies.draakiiii.com',
      color: '#FF6600',
      bgColor: '#CCFFFF',
    },
    {
      id: 'money',
      name: '💰 Money',
      description: '$$$ Gestión de dinero $$$ ¡¡AHORRA!!',
      url: 'https://money.draakiiii.com',
      color: '#008000',
      bgColor: '#FFFFCC'
    },
    {
      id: 'lectura',
      name: '👥 Lectura',
      description: 'Lecturas conjuntas en grupo 📖📖📖',
      url: 'https://lectura.draakiiii.com',
      color: '#000080',
      bgColor: '#FFE0CC',
      isWip: true
    },
    {
      id: 'peluqueria',
      name: '✂️ Peluquería',
      description: 'Aplicación para probar estilos de peinado 💇‍♂️',
      url: 'https://peluqueria.draakiiii.com',
      color: '#CC0066',
      bgColor: '#E0CCFF',
      isDisabled: true
    },
    {
      id: 'shopping',
      name: '🧾 Shopping',
      description: 'Sube tus tickets de la compra y analiza tus hábitos 🛍️📊',
      url: 'https://shopping.draakiiii.com',
      color: '#FF1493',
      bgColor: '#FFF0F5',
      isNew: true
    },
    {
      id: 'discotet',
      name: '🎧 Discotet',
      description: 'Escucha música con amigos, haz reviews y consulta estadísticas 🎶📈',
      url: 'https://discotet.draakiiii.com',
      color: '#1E90FF',
      bgColor: '#E6F2FF',
      isNew: true
    },
  ]

  const handleAppClick = (app) => {
    if (app.isDisabled) return
    window.open(app.url, '_blank', 'noopener,noreferrer')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="retro-page">
      {/* Shooting stars */}
      <div className="stars-container">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="shooting-star" style={{ animationDelay: `${i * 1.2}s`, top: `${Math.random() * 60}%` }} />
        ))}
      </div>

      {/* Top banner */}
      <div className="top-banner">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            ★★★ ¡¡¡BIENVENIDO A DRAAKIIII HUB!!! ★★★ Tu portal de aplicaciones número 1 en Internet ★★★ ¡¡ACTUALIZADO!! ★★★ ¡¡Todas las apps que necesitas en un solo lugar!! ★★★ Optimizado para Netscape Navigator 4.0 y superior ★★★ Resolución recomendada: 800x600 ★★★
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="retro-header">
        <div className="header-decoration">═══════════════════════════════</div>
        <h1 className="retro-title">
          <span className="title-shadow">
            ★ DRAAKIIII HUB ★
          </span>
        </h1>
        <div className="retro-subtitle">
          ~ Tu centro de aplicaciones y herramientas ~
        </div>
        <div className="header-decoration">═══════════════════════════════</div>
        <div className="counter-box">
          <span>📊 Visitantes: </span>
          <span className="visitor-counter">{visitorCount.toLocaleString()}</span>
          <span> | 🕐 {currentTime.toLocaleTimeString()}</span>
        </div>
      </header>

      {/* Navigation bar */}
      <nav className="retro-nav">
        <span className="nav-item" onClick={scrollToTop}>[ 🏠 Home ]</span>
        <a className="nav-item" href="mailto:draakiiiifigures@gmail.com">[ 📧 Email ]</a>
        <span className="nav-item" onClick={() => document.getElementById('links')?.scrollIntoView()}>[ 🔗 Links ]</span>
      </nav>

      {/* Under construction banner */}
      <div className="construction-banner">
        🚧 ¡¡ PÁGINA EN CONSTANTE CONSTRUCCIÓN !! 🚧
      </div>

      {/* Main content */}
      <main className="retro-main">
        <div className="section-title-box">
          <div className="section-title-decor">╔══════════════════════════════════╗</div>
          <h2 className="section-title">
            {blink && '>>>'} MIS APLICACIONES {blink && '<<<'}
          </h2>
          <div className="section-title-decor">╚══════════════════════════════════╝</div>
        </div>

        <div className="apps-table-container">
          <table className="apps-table">
            <thead>
              <tr>
                <th>APLICACIÓN</th>
                <th>DESCRIPCIÓN</th>
                <th>ESTADO</th>
                <th>ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app) => (
                <tr
                  key={app.id}
                  className={`app-row ${app.isDisabled ? 'app-disabled' : ''} ${app.isWip ? 'app-wip' : ''}`}
                  onClick={() => handleAppClick(app)}
                >
                  <td
                    className="app-name-cell"
                    style={{
                      color: app.isDisabled ? '#808080' : app.color,
                      backgroundColor: app.isDisabled ? '#333333' : (app.isWip ? '#444422' : app.bgColor),
                      opacity: app.isDisabled ? 0.6 : 1
                    }}
                  >
                    <span className={`app-name-text ${app.isDisabled ? 'text-strikethrough' : ''}`}>{app.name}</span>
                    {app.isHot && <span className="hot-badge">¡¡HOT!!</span>}
                    {app.isNew && <span className="new-retro-badge">★NEW★</span>}
                    {app.isDisabled && <span className="disabled-badge">NO DISPONIBLE</span>}
                    {app.isWip && <span className="wip-badge">🔧 WIP</span>}
                  </td>
                  <td className={`app-desc-cell ${app.isDisabled ? 'text-disabled' : ''}`}>
                    {app.description}
                  </td>
                  <td className="app-status-cell">
                    {app.isDisabled && <span className="status-unavailable">🚫 CERRADO</span>}
                    {app.isWip && <span className="status-wip">🔧 EN DESARROLLO</span>}
                    {!app.isDisabled && !app.isWip && <span className="status-online">✅ ONLINE</span>}
                  </td>
                  <td className="app-action-cell">
                    {app.isDisabled ? (
                      <button className="retro-button retro-button-disabled" disabled>
                        ✖ CERRADO ✖
                      </button>
                    ) : app.isWip ? (
                      <button className="retro-button retro-button-wip">
                        🔧 PRONTO 🔧
                      </button>
                    ) : (
                      <button
                        className="retro-button"
                        onClick={(e) => { e.stopPropagation(); handleAppClick(app) }}
                        style={{ backgroundColor: app.color, color: '#FFFFFF' }}
                      >
                        ► ENTRAR ◄
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards alternative view (mobile) */}
        <div className="retro-cards-grid">
          {apps.map((app) => (
            <div
              key={app.id + '-card'}
              className={`retro-card ${app.isDisabled ? 'retro-card-disabled' : ''} ${app.isWip ? 'retro-card-wip' : ''}`}
              onClick={() => handleAppClick(app)}
              style={{ borderColor: app.isDisabled ? '#808080' : app.color }}
            >
              {app.isHot && <div className="card-hot-label" style={{ backgroundColor: '#FF0000' }}>¡¡HOT!!</div>}
              {app.isDisabled && <div className="card-hot-label" style={{ backgroundColor: '#808080' }}>NO DISPONIBLE</div>}
              {app.isWip && <div className="card-hot-label" style={{ backgroundColor: '#FF8800' }}>🔧 WIP</div>}
              <div className="retro-card-header" style={{
                backgroundColor: app.isDisabled ? '#555555' : app.color,
                color: '#FFFFFF'
              }}>
                <span className={app.isDisabled ? 'text-strikethrough' : ''}>{app.name}</span>
              </div>
              <div className="retro-card-body" style={{
                backgroundColor: app.isDisabled ? '#333333' : app.bgColor,
                color: app.isDisabled ? '#808080' : '#000000'
              }}>
                <p>{app.description}</p>
                {app.isDisabled ? (
                  <button className="retro-button card-btn retro-button-disabled" disabled>
                    ✖ CERRADO ✖
                  </button>
                ) : app.isWip ? (
                  <button className="retro-button card-btn retro-button-wip">
                    🔧 PRONTO 🔧
                  </button>
                ) : (
                  <button
                    className="retro-button card-btn"
                    style={{ backgroundColor: app.color, color: '#FFFFFF' }}
                  >
                    ★ CLICK AQUÍ ★
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Links section */}
        <div id="links" className="section-title-box" style={{ marginTop: '30px' }}>
          <div className="section-title-decor">╔══════════════════════════════════╗</div>
          <h2 className="section-title">
            {blink && '>>>'} MIS LINKS {blink && '<<<'}
          </h2>
          <div className="section-title-decor">╚══════════════════════════════════╝</div>
        </div>
        <div className="retro-links-box">
          <a href="https://x.com/draakiiii" target="_blank" rel="noopener noreferrer" className="retro-social-link link-twitter">
            🐦 Twitter / X → @draakiiii
          </a>
          <a href="https://www.instagram.com/draakiiii_/" target="_blank" rel="noopener noreferrer" className="retro-social-link link-instagram">
            📸 Instagram → @draakiiii_
          </a>
          <a href="https://letterboxd.com/draakiiii/" target="_blank" rel="noopener noreferrer" className="retro-social-link link-letterboxd">
            🎬 Letterboxd → draakiiii
          </a>
        </div>
      </main>

      {/* Separator */}
      <div className="retro-separator">
        <span>★</span><span>☆</span><span>★</span><span>☆</span><span>★</span><span>☆</span><span>★</span><span>☆</span><span>★</span><span>☆</span><span>★</span><span>☆</span><span>★</span><span>☆</span><span>★</span>
      </div>

      {/* Bottom marquee */}
      <div className="bottom-marquee">
        <div className="marquee-wrapper">
          <div className="marquee-content marquee-reverse">
            💻 Esta página se ve mejor con Internet Explorer 6.0 💻 Mejor resolución: 800x600 💻 Hecho con Notepad 💻
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="retro-footer">
        <div className="footer-badges">
          <span className="footer-badge badge-1">HTML 4.0</span>
          <span className="footer-badge badge-2">JavaScript</span>
          <span className="footer-badge badge-3">CSS 2.0</span>
        </div>
        <p className="retro-footer-text">
          Creado por{' '}
          <a
            href="https://x.com/draakiiii"
            target="_blank"
            rel="noopener noreferrer"
            className="retro-footer-link"
          >
            @draakiiii
          </a>
        </p>
        <p className="copyright-text">
          © 1999-2026 Draakiiii HUB - Todos los derechos reservados
        </p>
        <p className="copyright-text" style={{ fontSize: '10px' }}>
          Última actualización: {currentTime.toLocaleDateString()}
        </p>
      </footer>
    </div>
  )
}

export default App