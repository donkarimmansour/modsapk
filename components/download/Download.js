import Breadcrumb from "../details/Breadcrumb"
import Versions from "./Versions"
import FAQ from "./FAQ"
import Back from "./Back"
import { useTranslation } from "react-i18next"

const Download = () => {
  const { t } = useTranslation("download")

  return (
    <main id="primary">
      <article id="article">
        <section>
          <div className="container">

            <Breadcrumb />
 
          </div>

          <h1 className="has-medium-font-size has-text-align-center no-margin">Download Minecraft</h1>
          <span className="has-text-align-center has-small-font-size has-cyan-bluish-gray-color truncate margin-bottom-15">{t("download.APKLatestVersionForAndroid")}</span>
          <Versions />
          <FAQ />
          <Back />

        </section>
      </article>
    </main>
  )
}

export default Download