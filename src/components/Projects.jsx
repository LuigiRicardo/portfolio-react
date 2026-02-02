import { useState, useEffect } from 'react'

function Projects() {
    // Configuração: Quanto tempo o cache deve durar?
    // 1000 ms * 60 s * 60 m = 1 hora
    const CACHE_DURATION = 1000 * 60 * 60; 
    const CACHE_KEY = 'my_portfolio_repos';

    const [repos, setRepos] = useState(() => {
        // Tenta pegar os dados salvos
        const savedData = localStorage.getItem(CACHE_KEY)
        
        if (savedData) {
            const { data, timestamp } = JSON.parse(savedData)
            const now = new Date().getTime()

            // Se o cache ainda for válido (menos de 1 hora), usa ele
            if (now - timestamp < CACHE_DURATION) {
                return data
            }
        }
        return [] // Se não tiver cache ou estiver velho, começa vazio
    })

    const [loading, setLoading] = useState(() => {
        const savedData = localStorage.getItem(CACHE_KEY)
        if (savedData) {
            const { timestamp } = JSON.parse(savedData)
            const now = new Date().getTime()
            // Se o cache é válido, loading é false
            if (now - timestamp < CACHE_DURATION) {
                return false
            }
        }
        return true // Se expirou ou não existe, loading é true
    })

    useEffect(() => {
        const getRepos = async () => {
            const savedData = localStorage.getItem(CACHE_KEY)
            const now = new Date().getTime()

            // CHECAGEM DE VALIDADE
            if (savedData) {
                const { timestamp } = JSON.parse(savedData)
                // Se a diferença de tempo for MENOR que a duração, paramos aqui.
                // O usuário vê a versão cacheada e economizamos internet.
                if (now - timestamp < CACHE_DURATION) {
                    console.log("Usando cache do GitHub (fresco)")
                    return 
                }
            }

            console.log("Cache expirado ou inexistente. Buscando no GitHub...")

            try {
                const response = await fetch('https://api.github.com/users/LuigiRicardo/repos')
                const data = await response.json()

                // Atualiza o estado da tela
                setRepos(data)
                setLoading(false)
                
                // SALVA DADOS + DATA ATUAL
                const payload = {
                    data: data,
                    timestamp: new Date().getTime() // Carimbo de tempo de agora
                }
                localStorage.setItem(CACHE_KEY, JSON.stringify(payload))

            } catch (error) {
                console.error("Erro ao buscar repositórios:", error)
                // Em caso de erro (sem internet), tentamos usar o cache antigo se existir
                if (savedData) {
                    const { data } = JSON.parse(savedData)
                    setRepos(data)
                }
                setLoading(false)
            }
        }

        getRepos()
    }, [])

    return (
        <div className="section active">
            <h2>Projects</h2>
            
            {loading ? (
                <p className="loading">Atualizando projetos do GitHub...</p>
            ) : (
                <div className="projects-grid">
                    {Array.isArray(repos) && repos.map((repo) => (
                        <div key={repo.id} className="project-card">
                            <h3>{repo.name}</h3>
                            <p>{repo.description || "Sem descrição definida."}</p>
                            
                            {repo.language && (
                                <span className="language-tag">{repo.language}</span>
                            )}

                            <div className="project-links">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    Ver Código
                                </a>
                                {repo.homepage && (
                                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                        Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Projects