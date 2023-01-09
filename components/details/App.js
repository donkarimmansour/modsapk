import Link from "next/link"
import { useTranslation } from "react-i18next"

const App = () => {
  const { t } = useTranslation("details")

  return (
    <div className="entry-block entry-content main-entry-content">
    <div className="app no-padding">
      <div className="app-icon">
        <img data-perfmatters-preload={2} loading="lazy" decoding="async" importance="low" src="https://app-cdn.acelitchi.com:443/prod/app/1/7/8761583724469161536.webp" alt="WorldBox icon" width={90} height={90} />
      </div>
      <div className="app-name">
        <div className="app-box-name-heading">
          <h1 className="has-medium-font-size no-margin">
            <strong>Minecraft</strong>
            <span className="has-cyan-bluish-gray-color"> APK + MOD (Skin unlocked,Immortality)
              v1.19.60.24</span>
          </h1>
          <span className="has-small-font-size has-cyan-bluish-gray-color truncate">{t("details:UpdatedOn")} <time dateTime="2022-12-16T07:12:50.671Z">Fri Dec 16 2022</time></span>
          <div className="rating hide-on-med-and-down">
            <span className="star-small active " />
            <span className="star-small active " />
            <span className="star-small active " />
            <span className="star-small active " />
            <span className="star-small active " />
          </div>
         
        </div>
      </div>
    </div>
    <div className="wp-block-buttons margin-top-15">
      <div className="wp-block-button has-custom-width wp-block-button__width-100 response-download-btn" style={{verticalAlign: 'top'}}>
        <Link href="/download" className="wp-block-button__link has-background-color has-vivid-cyan-blue-background-color clickable secondary-btn">
          <i className="material-icons">
            <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z">
              </path>
            </svg>
          </i>
          {t("details:Download")}
        </Link>
      </div>

    </div>
  </div>

)
}

export default App