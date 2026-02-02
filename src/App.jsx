import { useState } from 'react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import './App.css' // Se tiver algum CSS extra

function App() {
  // Estado: controla qual "página" está visível
  const [activeTab, setActiveTab] = useState('about')

  return (
    <main className="container">
      
      {/* Sidebar controla o estado activeTab */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Renderização Condicional: Só mostra o componente se o estado combinar */}
      <section className="content">
        {activeTab === 'about' && <About />}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'education' && <Education />}
      </section>

    </main>
  )
}

export default App