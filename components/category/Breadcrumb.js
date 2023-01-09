import Link from "next/link"
import { useTranslation } from "react-i18next"

const Breadcrumb = () => {
  const { t } = useTranslation()

  return (
    <div id="breadcrumb" className="has-small-font-size has-cyan-bluish-gray-color truncate">
      <span>
        <span>
          <Link className="has-cyan-bluish-gray-color" href="/">{("Home")}</Link> /
          <span className="has-cyan-bluish-gray-color" aria-current="page">{("Games")}</span>
        </span>
      </span>
    </div>
  )
}

export default Breadcrumb 