import profilePic from '../assets/img/luigi_pfp.webp'
import githubLogo from '../assets/img/github_logo.webp'
import linkedinLogo from '../assets/img/linkedin_logo.webp'
import instagramLogo from '../assets/img/instagram_logo.webp'
import gmailLogo from '../assets/img/gmail_logo.webp'
import whatsappLogo from '../assets/img/whatsapp_logo.webp'
import { useTranslation } from 'react-i18next';

function Sidebar({ activeTab, onTabChange, isOpen, onClose }) { 
    const { t, i18n } = useTranslation();
    
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }
    
    const getButtonClass = (tabName) => {
        return activeTab === tabName ? 'active' : '';
    }

    // Função auxiliar: Navega para a aba e fecha o menu mobile
    const handleNavigation = (tabName) => {
        onTabChange(tabName);
        if (onClose) onClose();
    }

    return (
        <header id="sidebar-nav" className={`sidebar ${isOpen ? 'open' : ''}`}>
            
            {/* Botão de Fechar (X) - Só aparece no mobile via CSS */}
            <button className="close-btn" onClick={onClose}>&times;</button>

            <div className="sidebar_top">
                <div className="lang-switcher" style={{ marginTop: '10px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button 
                        onClick={() => changeLanguage('pt')} 
                        style={{ padding: '5px', cursor: 'pointer', border: i18n.language.includes('pt') ? '2px solid var(--accent-color)' : '1px solid #333', background: 'transparent', borderRadius: '4px' }}
                    >
                        🇧🇷
                    </button>
                    <button 
                        onClick={() => changeLanguage('en')}
                        style={{ padding: '5px', cursor: 'pointer', border: i18n.language.includes('en') ? '2px solid var(--accent-color)' : '1px solid #333', background: 'transparent', borderRadius: '4px' }}
                    >
                        🇺🇸
                    </button>
                </div>
                <div className="profile">
                    <img src={profilePic} id="profile_pic" alt="Luigi Ricardo" width="200" height="200"/>
                    <h1>Luigi Ricardo</h1>
                    <h2>{t('sidebar.role')}</h2>
                    <h2>{t('sidebar.role2')}</h2>
                </div>

                <nav aria-label="Primary navigation">
                    <ul>
                        <li>
                            <button
                                className={getButtonClass('about')}
                                onClick={() => handleNavigation('about')}
                            >   
                                {t('sidebar.about')}
                            </button>
                        </li>
                        <li>
                            <button
                                className={getButtonClass('experience')}
                                onClick={() => handleNavigation('experience')}
                            >
                                {t('sidebar.experience')}
                            </button>
                        </li>
                        <li>
                            <button
                                className={getButtonClass('projects')}
                                onClick={() => handleNavigation('projects')}
                            >
                                {t('sidebar.projects')}
                            </button>
                        </li>
                        <li>
                            <button
                                className={getButtonClass('education')}
                                onClick={() => handleNavigation('education')}
                            >
                                {t('sidebar.education')}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="social">
                <a href="https://github.com/LuigiRicardo" target="_blank" rel="noopener noreferrer" aria-label={t('social.github')}>
                    <img src={githubLogo} alt="" aria-hidden="true" height="20" />
                </a>
                <a href="https://www.linkedin.com/in/luigiricardo" target="_blank" rel="noopener noreferrer" aria-label={t('social.linkedin')}>
                    <img src={linkedinLogo} alt="" aria-hidden="true" height="20" />
                </a>
                <a href="https://www.instagram.com/luidigdin/" target="_blank" rel="noopener noreferrer" aria-label={t('social.instagram')}>
                    <img src={instagramLogo} alt="" aria-hidden="true" height="20" />
                </a>
                <a href="mailto:luigi.ricardo123@gmail.com" target="_blank" rel="noopener noreferrer" aria-label={t('social.email')}>
                    <img src={gmailLogo} alt="" aria-hidden="true" height="20" />
                </a>
                <a href="https://wa.me/5535998896271" target="_blank" rel="noopener noreferrer" aria-label={t('social.whatsapp')}>
                    <img src={whatsappLogo} alt="" aria-hidden="true" height="20" />
                </a>
            </div>
        </header>
    )
}

export default Sidebar;