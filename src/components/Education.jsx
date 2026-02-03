import { useTranslation } from 'react-i18next';

function education() {
    const { t } =useTranslation()
    return (
        <div className="section active">
            <h2>{t('education.title')}</h2>
            <h3>{t('education.uni1_name')}</h3>
            <ul>
                <li>{t('education.uni1_desc1')}</li>
                <li>{t('education.uni1_desc2')}</li>
            </ul>
            <h3>{t('education.uni2_name')}</h3>
            <ul>
                <li>{t('education.uni2_desc1')}</li>
                <li>{t('education.uni2_desc2')}</li>
            </ul>
        </div>
    )
}

export default education;