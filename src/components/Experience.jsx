import { useTranslation } from 'react-i18next';

function Experience() {
    const { t } =useTranslation()

    return (
        <div className="section active">
            <h2>{t('experience.title')}</h2>
            <h3>{t('experience.job1_title')}</h3>
            <ul>
                <li>{t('experience.job1_desc1')}</li>
                <li>{t('experience.job1_desc2')}</li>
                <li>{t('experience.job1_desc3')}</li>
            </ul>
            <h3>{t('experience.job2_title')}</h3>
            <ul>
                <li>{t('experience.job2_desc1')}</li>
                <li>{t('experience.job2_desc2')}</li>
                <li>{t('experience.job2_desc3')}</li>
            </ul>
        </div>
    )
}
export default Experience