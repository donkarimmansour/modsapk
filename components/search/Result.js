import { useTranslation } from "react-i18next"

const Result = () => {
    const { t } = useTranslation("home")

    return (
        <h1 class="has-larger-font-size">{t("SearchResultsFor")} "sab"</h1>
    )
}

export default Result