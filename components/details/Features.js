import { useTranslation } from "react-i18next"

const Features = () => {
  const { t } = useTranslation("details")

  return (
    <div className="entry-content">
      <div className="entry-block entry-content">
        <h2 className="has-medium-font-size no-margin">{t("details:ModFeatures")}</h2>
        <ul className="mod-features-list">
          <li className="text-truncate" style={{ listStyleType: 'none!important' }}>- All unlocked</li>
          <li className="text-truncate" style={{ listStyleType: 'none!important' }}>- Building Unlocked</li>
          <li className="text-truncate" style={{ listStyleType: 'none!important' }}>- Character Creator Unlocked</li>
          <li className="text-truncate" style={{ listStyleType: 'none!important' }}>- District Unlocked</li>
          <li className="text-truncate" style={{ listStyleType: 'none!important' }}>- Feature Unlocked</li>
        </ul>
      </div>
    </div>
  )
}

export default Features