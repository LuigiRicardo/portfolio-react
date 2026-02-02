import { useTranslation } from 'react-i18next';

function Experience() {
    const { t } =useTranslation()

    return (
        <div className="section active">
            <h2>{t('experience.title')}</h2>
            <h3>{t('experience.job1_title')}</h3>
            <ul>
                <li>Assist with daily office operations, document organization, and data entry using Microsoft Office.</li>
                <li>Proactive Process Automation: Took the initiative to develop automation scripts using Python and SQL. Integrated these with Excel to query the local database, significantly reducing manual data entry time and increasing report accuracy.</li>
                <li>IT Support & Troubleshooting: Provided first-level technical support to the team, diagnosing and resolving issues related to network connectivity, hardware performance, and software configuration.</li>
            </ul>
            <h3>Chef de Partie | Emporium, Itajubá - MG, Brazil | 02/2024 - 08/2024</h3>
            <ul>
                <li>Team lead: Worked closely with a diverse team to ensure operational excellence, maintaining clear communication channels to coordinate complex workflows effectively.</li>
                <li>Standardization & QA: Ensured strict adherence to quality standards and operational protocols, a mindset I now apply to code quality and software testing.</li>
                <li>High-Performance Environment: Thrived in a fast-paced, high-pressure environment, requiring rapid decision-making, strict time management, and adaptability to changing scenarios.</li>
            </ul>
        </div>
    )
}
export default Experience