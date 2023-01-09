import { useTranslation } from "react-i18next"
import Breadcrumb from "./Breadcrumb"
import Orderby from "./Orderby"

const Desc = () => {
  const { t } = useTranslation("category")

  return (
    <section>
      <div className="container">
        <Breadcrumb />
        <h1 className="has-larger-font-size tac"><strong>{t("Game")}</strong></h1>
        <div className="has-text-align-justify">
          <p><strong>{t("category:GameDesc")}</strong></p>
        </div>
        <Orderby />
      </div>
    </section>
  )
}

export default Desc