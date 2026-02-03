import { useState, Suspense, lazy } from 'react' // 1. Adicionado Suspense e lazy
import Sidebar from './components/Sidebar'
import About from './components/About' // Mantemos About fixo para carregar instantâneo
import './App.css'
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

// 2. Importações Dinâmicas (Lazy)
// O navegador só baixa esses arquivos quando o usuário clicar na aba
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));

function App() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('about')
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

      {/* Botão Hambúrguer */}
      <button 
        className="menu-toggle" 
        onClick={() => setIsMenuOpen(true)}
        aria-label="Abrir menu de navegação"
        aria-expanded={isMenuOpen}
        aria-controls="sidebar-nav"
      >
        <span aria-hidden="true">☰</span>
      </button>

      {/* Overlay Escuro */}
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
      
      {/* Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
      />

      <section id="main-content" className="content" tabIndex="-1">

        {activeTab === 'about' && <About />}

        {/* As outras abas carregam sob demanda */}
        <Suspense fallback={<div style={{ padding: '2rem', color: '#fff' }}>Carregando...</div>}>
          
          {activeTab === 'experience' && <Experience />}
          
          {activeTab === 'projects' && <Projects />}
          
          {activeTab === 'education' && <Education />}
          
        </Suspense>

      </section>

    </main>
  )
}

export default App