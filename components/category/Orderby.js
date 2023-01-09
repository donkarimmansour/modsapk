import { useTranslation } from "react-i18next"

const Orderby = () => {
  const { t } = useTranslation("category")

  return (
    <div id="orderby">
      <ul>
        <li>
          <a className="wp-block-button__link has-white-color" href="#!"><span className="has-small-font-size">{t("category:Updated")}</span></a>
        </li>
        <li>
          <a href="#!"><span className="has-small-font-size">{t("category:NewReleases")}</span></a>
        </li>
        <li>
          <a href="#!"><span className="has-small-font-size">{t("category:Popular")}</span></a>
        </li>
        <li>
          <a href="#!"><span className="has-small-font-size">{t("category:Premium")}</span></a>
        </li>
        <li>
          <a className="sidenav-trigger" href="#!" data-target="nav-sub-category"><span className="has-small-font-size">{t("category:AllCategories")}</span></a>
        </li>
      </ul>
    </div>

  )
}

export default Orderby