import { useTranslation } from "next-i18next"
import Link from "next/link"

const Nav = () => {

   const { t } = useTranslation()

  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <Link href="/category" >{t("header.Games")}</Link>
      </li>

      <li>
        <Link href="/category" >{t("header.Apps")}</Link>
      </li>
    </ul>
  )

} 

export default Nav