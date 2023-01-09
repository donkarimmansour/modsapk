import Link from "next/link"
import { useTranslation } from "react-i18next"

const Info = () => {
  const { t } = useTranslation("details")


  // let o = {
  //   "Name": "",
  //   "PackageName": "",
  //   "Publisher": "",
  //   "Category": "", 
  //   "MODFeatures": "",
  //   "Version": "",
  //   "Size": "",
  //   "Price": "",
  //   "Requires": ""
  // }

  // o.Name = document.querySelector("tbody tr:nth-child(1) th").textContent
  // o.PackageName = document.querySelector("tbody tr:nth-child(2) th").textContent
  // o.Publisher = document.querySelector("tbody tr:nth-child(3) th").textContent
  // o.Category = document.querySelector("tbody tr:nth-child(4) th").textContent
  // o.MODFeatures = document.querySelector("tbody tr:nth-child(5) th").textContent
  // o.Version = document.querySelector("tbody tr:nth-child(6) th").textContent
  // o.Size = document.querySelector("tbody tr:nth-child(7) th").textContent
  // o.Price = document.querySelector("tbody tr:nth-child(8) th").textContent
  // o.Requires = document.querySelector("tbody tr:nth-child(9) th").textContent


  // console.log(o)










  return (
    <div className="entry-block entry-content">
    <h2 className="has-medium-font-size no-margin uppercase">{t("details:info.Title")}</h2>
    <figure className="wp-block-table">
      <table className="has-fixed-layout">
        <tbody>
          <tr>
            <th className="has-text-align-left has-small-font-size has-cyan-bluish-gray-color">{t("details:info.Name")}</th>
            <td className="has-text-align-right truncate">Minecraft</td>
          </tr>
          <tr>
            <th className="has-text-align-left has-small-font-size has-cyan-bluish-gray-color">{t("details:info.PackageName")}</th>
            <td className="has-text-align-right truncate">
              <a href="https://play.google.com/store/apps/details?id=com.mojang.minecraftpe" rel="nofollow noopener" target="_blank">com.mojang.minecraftpe</a>
            </td>
          </tr>
          <tr>
            <th className="has-text-align-left has-small-font-size has-cyan-bluish-gray-color">{t("details:info.Publisher")}</th>
            <td className="has-text-align-right truncate">Mojang</td>
          </tr>
          <tr>
            <th className="has-text-align-left has-small-font-size has-cyan-bluish-gray-color">{t("details:info.Category")}</th>
            <td className="has-text-align-right truncate">Adventures
              <Link href="/category" aria-label="Open Strategy category">
                <i className="material-icons">
                  <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z">
                    </path>
                  </svg>
                </i>
              </Link>
            </td>
          </tr>
          <tr>
            <th className="has-text-align-left has-small-font-size has-cyan-bluish-gray-color">{t("details:info.MODFeatures")}</th>
            <td className="has-text-align-right truncate">Skin unlocked,Immortality</td>
          </tr>
          <tr>
            <th className="has-text-align-left has-small-font-size has-cyan-bluish-gray-color">{t("details:info.Version")}</th>
            <td className="has-text-align-right truncate">1.19.60.24</td>
          </tr>
          <tr>
            <th className="has-text-align-left has-small-font-size has-cyan-bluish-gray-color">{t("details:info.Size")}</th>
            <td className="has-text-align-right truncate">734.48 MB</td>
          </tr>
          <tr>
            <th className="has-text-align-left has-small-font-size has-cyan-bluish-gray-color">{t("details:info.Price")}</th>
            <td className="has-text-align-right truncate">
              <span className="has-vivid-green-cyan-color">
                Free
              </span>
            </td>
          </tr> 
          <tr>
            <th className="has-text-align-left has-small-font-size has-cyan-bluish-gray-color">{t("details:info.Requires")}</th>
            <td className="has-text-align-right truncate">Android 5.0</td>
          </tr>
        </tbody>
      </table>
    </figure>
  </div>
  )
}

export default Info