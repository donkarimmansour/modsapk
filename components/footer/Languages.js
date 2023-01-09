import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Languages = () => {

  const { t } = useTranslation()
  const { locale, pathname, query, asPath , push} = useRouter();

  const setCookie = (locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`
  }

  const changeLang = (lcl) => {
    setCookie(lcl)
    push({ pathname, query }, asPath, { locale: lcl })
  }


  console.log(locale)

  return (
    <div className="inline-block right">
      <select aria-label="Change Language" value={locale} onChange={(e) => { changeLang(e.target.value) }}>
        <option value="en" >{t("languages.English")}</option>
        <option value="vi">{t("languages.TiengViet")}</option>
        <option value="es">{t("languages.Espanol")}</option>
        <option value="pt">{t("languages.Portugues")}</option>
        <option value="fr">{t("languages.Francais")}</option>
        <option value="id">{t("languages.BahasaIndonesia")}</option>
      </select>
    </div>

  )
}

export default Languages 