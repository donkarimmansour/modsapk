import Link from "next/link"
import { useTranslation } from "react-i18next"

const Breadcrumb = () => {
  const { t } = useTranslation("")

  return (
    <div className="entry-content">
      <div id="breadcrumb" className="margin-bottom-15 has-small-font-size has-cyan-bluish-gray-color truncate">
        <Link className="has-cyan-bluish-gray-color" href="/">{t("Home")}</Link> /
        <Link className="has-cyan-bluish-gray-color" href="/category">{t("Games")}</Link> /
        <Link className="has-cyan-bluish-gray-color" href="/details">Adventures</Link> /
        <span className="has-cyan-bluish-gray-color" aria-current="page">Minecraft</span>
      </div>
    </div>
  )
}

export default Breadcrumb