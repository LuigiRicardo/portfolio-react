import { useTranslation } from 'react-i18next';

function Experience() {
    const { t } =useTranslation();

    return (
        <div className="section active">
            <h2>{t('education.title')}</h2>
            <h3>{t('education.uni1_title')}</h3>
            <ul>
                <li>{t('education.uni1_desc1')}</li>
                <li>{t('education.uni1_desc1')}</li>
                <li>{t('education.uni1_desc1')}</li>
            </ul>
            <h3>Chef de Partie | Emporium, Itajubá - MG, Brazil | 02/2024 - 08/2024</h3>
            <ul>
                <li>{t('education.uni1_desc1')}</li>
                <li>Standardization & QA: Ensured strict adherence to quality standards and operational protocols, a mindset I now apply to code quality and software testing.</li>
                <li>High-Performance Environment: Thrived in a fast-paced, high-pressure environment, requiring rapid decision-making, strict time management, and adaptability to changing scenarios.</li>
            </ul>
        </div>
    )
}
export default Experience