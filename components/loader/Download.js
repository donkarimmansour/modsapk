import FAQ from "../download/FAQ"
import { useState , useEffect } from "react";
import { useTranslation } from "react-i18next";

const Download = () => {

  
  const [progressStatus , setProgressStatus] = useState(0)
  const { t } = useTranslation("download")

  useEffect(() => {

    const download = document.getElementById("download");
    const download_loading = document.getElementById("download-loading")

    setTimeout(function () {
      clearInterval(clearTimer)
      download_loading.style.display = "none";
      download.style.display = "block";
    }, 3000)

    const clearTimer = setInterval(() => {
      setProgressStatus(v => v + 1)
    }, 300)

  })
  

  return (
    <div className="container">

    <div className="entry-content">
      <h1 className="has-medium-font-size has-text-align-center no-margin">Download Minecraft</h1>
      <span className="has-text-align-center has-small-font-size has-cyan-bluish-gray-color margin-bottom-15 truncate">Minecraft_1.19.60.24_951906024_5a316d.apk</span>
    </div>
    <div className="entry-content">
      <div id="download-loading" className="has-text-align-center margin-top-15" style={{display: 'block'}}>
        <div className="progress">
          <span className="progress-text has-small-font-size has-white-color truncate">{t("download.PleaseWaitAFewSeconds")}</span>
          <div className="progress-status" style={{'width' : `${progressStatus}%`}}>&nbsp;</div>
        </div>
      </div>
      <div id="download" className="has-text-align-center margin-top-15" style={{display: 'none'}}>
        <div className="wp-block-buttons">
          <div className="wp-block-button has-custom-width wp-block-button__width-100">
            <a id="download-button"  href="#!" className="wp-block-button__link has-vivid-cyan-blue-background-color clickable">
              <i className="material-icons">
                <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z">
                  </path>
                </svg>
              </i>
              {t("download.English")}
            </a>
          </div>
        </div>
      </div>
    </div>

  <FAQ type="loader" />
</div> 


)
}

export default Download