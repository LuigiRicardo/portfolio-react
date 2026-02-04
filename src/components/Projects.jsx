import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

function Projects() {
    const { t } = useTranslation();
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
                // Verifica se a diferença de tempo é que a duração.
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

                data.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))

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
            <h2>{t('projects.title')}</h2>
            
            {loading ? (
                <p className="loading">{t('projects.loading')}</p>
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
                                    {t('projects.view_code')}
                                </a>
                                {repo.homepage && (
                                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                        {t('projects.demo')}
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