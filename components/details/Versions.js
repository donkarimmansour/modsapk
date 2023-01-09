import Link from "next/link"
import { useTranslation } from "react-i18next"

const Versions = () => {
  const { t } = useTranslation("details")

  return (


    <>

      <div className="entry-aside">
        <h2 className="has-large-font-size no-margin">{t("details:NewVersion")}</h2>
        <div className="version-card">
          <a href="/id/games/toca-life-world" target="_blank">
            <img className="version-card--icon pointer" src="https://app-cdn.acelitchi.com:443/prod/app/1/7/8761583724469161536.webp" />
          </a>
          <div className="version-card-content">
            <a className="has-black-color" href="/id/games/toca-life-world" target="_blank">
              <div className="version-card-content--title pointer">Toca World Mod Apk 1.57.1 Semua Tidak Terkunci,Building Unlocked,Character Creator Unlocked,District Unlocked,Feature Unlocked</div>
            </a>
            <span className="has-small-font-size has-cyan-bluish-gray-color truncate">{t("details:UpdatedOn")} <time dateTime="2023-01-09T06:14:37.701Z">Mon Jan 09 2023</time></span>
          </div>
        </div>
        <div className="wp-block-buttons margin-top-15">
          <div className="wp-block-button has-custom-width wp-block-button__width-100">
            <Link href="/download" className="wp-block-button__link has-background-color has-vivid-cyan-blue-background-color clickable">
            {t("details:Download")}
            </Link>
          </div>
        </div>
      </div>


      <div className="entry-aside">
        <h2 className="has-large-font-size no-margin">{t("details:AllVersions")}</h2>
        <div className="version-card">
          <Link href="/details" target="_blank">
            <img className="version-card--icon pointer" src="https://app-cdn.acelitchi.com:443/prod/app/1/7/8761583724469161536.webp" />
          </Link>
          <div className="version-card-content">
            <Link className="has-black-color" href="/details" target="_blank">
              <div className="version-card-content--title pointer">Minecraft Mod Apk 1.19.60.24 Skin
                unlocked,Immortality</div>
            </Link>
            <div className="version-card-content--features">
              <ul className="mod-features-list">
              </ul>
            </div>
          </div>
        </div>

      </div>

    </>

  )
}

export default Versions