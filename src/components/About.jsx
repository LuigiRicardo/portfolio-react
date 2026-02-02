import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    return (
        <div className="section active">
            <h2>{t('about.title')}</h2>
            <p>{t('about.description')}</p>
        </div>
    )
}

export default About;