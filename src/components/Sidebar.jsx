import profilePic from '../assets/img/luigi_pfp.png'
import githubLogo from '../assets/img/github_logo.png'
import linkedinLogo from '../assets/img/linkedin_logo.png'
import instagramLogo from '../assets/img/instagram_logo.png'
import gmailLogo from '../assets/img/gmail_logo.png'
import whatsappLogo from '../assets/img/whatsapp_logo.png'

function Sidebar({activeTab, onTabChange}) {
    const getButtonClass = (tabName) => {
        return activeTab === tabName ? 'active' : '';
    }

    return (
        <header className="sidebar">
            <div className="sidebar_top">
                <div className="profile">
                    <img src={profilePic} id="profile_pic" alt="Luigi Ricardo" />
                    <h1>Luigi Ricardo</h1>
                    <h2>Information systems student</h2>
                    <h2>Front-end developer</h2>
                </div>

                <nav aria-label="Primary navigation">
                    <ul>
                        <li>
                            <button
                                className={getButtonClass('about')}
                                onClick={() => onTabChange('about')}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                className={getButtonClass('experience')}
                                onClick={() => onTabChange('experience')}
                            >
                                Experience
                            </button>
                        </li>
                        <li>
                            <button
                                className={getButtonClass('projects')}
                                onClick={() => onTabChange('projects')}
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button
                                className={getButtonClass('education')}
                                onClick={() => onTabChange('education')}
                            >
                                Education
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