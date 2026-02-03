import { useState } from 'react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import './App.css'
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('about')
  
  // NOVO: Estado para controlar se o menu mobile está aberto
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="container">
      <Helmet>
        <title>Luigi Ricardo | {t('sidebar.role')}</title> 
        <meta name="description" content={t('about.description').substring(0, 160)} />
        <html lang={i18n.language} />
      </Helmet>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      {/* 1. Botão Hambúrguer (Só aparece no mobile via CSS) */}
      <button 
        className="menu-toggle" 
        onClick={() => setIsMenuOpen(true)}
        aria-label="Abrir menu de navegação"
        aria-expanded={isMenuOpen} // Diz o estado atual (true/false)
        aria-controls="sidebar-nav"
      >
        <span aria-hidden="true">☰</span> {/* O ícone visual é ignorado pelo leitor */}
      </button>

      {/* 2. Fundo Escuro (Só aparece se o menu estiver aberto) */}
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
      
      {/* 3. Passamos as props de controle para a Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
      />

      <section id="main-content" className="content" tabIndex="-1">
        <div style={{ display: activeTab === 'about' ? 'block' : 'none' }}>
          <About />
        </div>
        <div style={{ display: activeTab === 'experience' ? 'block' : 'none' }}>
            <Experience />
        </div>
        <div style={{ display: activeTab === 'projects' ? 'block' : 'none' }}>
            <Projects />
        </div>
        <div style={{ display: activeTab === 'education' ? 'block' : 'none' }}>
            <Education />
        </div>
      </section>

    </main>
  )
}

export default App