import Link from "next/link"
import { useTranslation } from "react-i18next"

const NavMobile = () => {

  const { t } = useTranslation()

  return (
    <ul id="nav-mobile" className="sidenav">
      <li>
        <Link href="/category" >{t("header.Games")}</Link>
      </li>

      <li>
        <Link href="/category" >{t("header.Apps")}</Link>
      </li>
      </ul>
  )
}

export default NavMobile