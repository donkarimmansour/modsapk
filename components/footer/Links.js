import { useState , useEffect } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Links = () => {

  const [isOpen , setIsOpen] = useState(true)
  const { t } = useTranslation()

  useEffect(() => {
    if(window.matchMedia("(max-width: 600px)").matches){
      setIsOpen(false)
    }
  })
  
  return (
   
    <div className="wp-block-columns">
    <div className="wp-block-column">
      <details open={isOpen}>
        <summary>
          <strong>{t("footer.WhoWeAre")}</strong>
        </summary>
        <ul className="footer-menu">
          <li><Link href="/about">{t("footer.About")}</Link></li>
          <li><Link href="/contact">{t("footer.Contact")}</Link></li>
          <li><Link href="/terms-of-service">T{t("footer.TermsofServices")}</Link></li>
          <li><Link href="/privacy-policy">{t("footer.PrivacyPolicy")}</Link></li>
          <li><Link href="/dmca-disclaimer">{t("footer.DMCADisclaimer")}</Link></li>
        </ul>
      </details>
    </div>
    <div className="wp-block-column">
      <details open={isOpen}>
        <summary>
          <strong>{t("footer.Trending")}</strong>
        </summary>
        <ul className="footer-menu">
          <li>
            <Link href="/">Spotify</Link>
          </li>
          <li>
            <Link href="/">Netflix</Link>
          </li>
          <li>
            <Link href="/">Minecraft</Link>
          </li>
        </ul>
      </details>
    </div>
    <div className="wp-block-column">
      <details open={isOpen}>
        <summary>
          <strong>{t("footer.Latest")}</strong>
        </summary>
        <ul className="footer-menu">

          <li>
            <Link href="/">Stumble Guys x Pokemon</Link>
          </li>
          <li>
            <Link href="/">NoxPlayer</Link>
          </li>
          <li>
            <Link href="/">Doodoo Love</Link>
          </li>

        </ul>
      </details>
    </div>
  </div>

  )
}

export default Links