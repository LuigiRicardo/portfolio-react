import profilePic from '../assets/img/luigi_pfp.png'
import githubLogo from '../assets/img/github_logo.png'
import linkedinLogo from '../assets/img/linkedin_logo.png'
import instagramLogo from '../assets/img/instagram_logo.png'
import gmailLogo from '../assets/img/gmail_logo.png'
import whatsappLogo from '../assets/img/whatsapp_logo.png'
import { useTranslation } from 'react-i18next';

function Sidebar({activeTab, onTabChange}) {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }
    const getButtonClass = (tabName) => {
        return activeTab === tabName ? 'active' : '';
    }

    return (
        <header className="sidebar">
            <div className="sidebar_top">
                <div className="profile">
                    <img src={profilePic} id="profile_pic" alt="Luigi Ricardo" />
                    <h1>Luigi Ricardo</h1>
                    <h2>{t('sidebar.role')}</h2>
                    <h2>{t('sidebar.role2')}</h2>
                </div>
                <div className="lang-switcher" style={{ marginTop: '10px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button 
                        onClick={() => changeLanguage('pt')} 
                        style={{ padding: '5px', cursor: 'pointer', border: i18n.language.includes('pt') ? '2px solid var(--accent-color)' : '1px solid #333' }}
                    >
                        🇧🇷
                    </button>
                    <button 
                        onClick={() => changeLanguage('en')}
                        style={{ padding: '5px', cursor: 'pointer', border: i18n.language.includes('en') ? '2px solid var(--accent-color)' : '1px solid #333' }}
                    >
                        🇺🇸
                    </button>
                </div>
                <nav aria-label="Primary navigation">
                    <ul>
                        <li>
                            <button
                                className={getButtonClass('about')}
                                onClick={() => onTabChange('about')}
                            >   
                                {t('sidebar.about')}
                            </button>
                        </li>
                        <li>
                            <button
                                className={getButtonClass('experience')}
                                onClick={() => onTabChange('experience')}
                            >
                                {t('sidebar.experience')}
                            </button>
                        </li>
                        <li>
                            <button
                                className={getButtonClass('projects')}
                                onClick={() => onTabChange('projects')}
                            >
                                {t('sidebar.projects')}
                            </button>
                        </li>
                        <li>
                            <button
                                className={getButtonClass('education')}
                                onClick={() => onTabChange('education')}
                            >
                                {t('sidebar.education')}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="social">
                <a href="https://github.com/LuigiRicardo" target="_blank"><img src={githubLogo} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/luigiricardo" target="_blank"><img src={linkedinLogo} alt="Linkedin" /></a>
                <a href="https://www.instagram.com/luidigdin/" target="_blank"><img src={instagramLogo} alt="Instagram" /></a>
                <a href="mailto:luigi.ricardo123@gmail.com"><img src={gmailLogo} alt="Email" /></a>
                <a href="https://wa.me/5535998896271" target="_blank"><img src={whatsappLogo} alt="Whatsapp" /></a>
            </div>
        </header>
    )
}

export default Sidebar;