import Link from "next/link"
import { useTranslation } from "react-i18next"

const Versions = () => {
  const { t } = useTranslation("download")

  return (

       <div className="entry-content entry-block">
                <h2 className="has-medium-font-size no-margin hide-on-med-and-down uppercase">{t("download.AVAILABLEVERSIONS")}</h2>
                <div className="download-list margin-top-15 margin-bottom-15">

                  <Link href="/loader" className="clickable">
                    <div className="download-item">
                      <div className="download-item-icon">
                        <img data-perfmatters-preload={3} loading="lazy" decoding="async" importance="low" src="https://app-cdn.acelitchi.com:443/prod/app/1/7/8761583724469161536.webp" alt="Minecraft icon" width={120} height={120} />
                      </div>
                      <div className="download-item-name">
                        <div className="has-vivid-cyan-blue-color">Minecraft v1.19.60.24</div>
                        <div className="has-cyan-bluish-gray-color has-small-font-size">
                          <span className="app-tag has-white-color has-vivid-green-cyan-background-color has-small-font-size">APK</span>
                          <span className="app-tag has-white-color has-luminous-vivid-orange-background-color has-small-font-size">MOD</span>
                        </div>
                      </div>
                    </div>
                  </Link>


                  <Link href="/loader" className="clickable">
                    <div className="download-item">
                      <div className="download-item-icon">
                        <img data-perfmatters-preload={3} loading="lazy" decoding="async" importance="low" src="https://app-cdn.acelitchi.com:443/prod/app/1/7/8761583724469161536.webp" alt="Minecraft icon" width={120} height={120} />
                      </div>
                      <div className="download-item-name">
                        <div className="has-vivid-cyan-blue-color">Minecraft v1.17.0.02</div>
                        <div className="has-cyan-bluish-gray-color has-small-font-size">
                          <span className="app-tag has-white-color has-vivid-green-cyan-background-color has-small-font-size">APK</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                
                 
                </div>
              </div>
      
  )
}

export default Versions