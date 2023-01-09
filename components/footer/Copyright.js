import { useTranslation } from "next-i18next"

const Copyright = () => {

  const { t } = useTranslation()

  return (
    <p>{t("footer.Copyright")}</p>
  )
} 

export default Copyright