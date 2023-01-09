import { useTranslation } from "react-i18next"

const SearchForm = () => {

  const { t } = useTranslation("home")

  const closeSearchForm = (e) => {
     e.target.parentElement.classList.remove("open")
  }

  return (
    <div id="search-form" className="modal">
      <a className="modal-close" href="#!" aria-label="Close Search" onClick={closeSearchForm} />
    <div className="modal-content">
      <form className="container" role="search" method="get" action="https://apkmody.io/">
        <button type="submit" aria-label="Search"><i className="material-icons">
            <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24}>
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
              </path>
            </svg>
          </i></button>

        <input id="search-input" type="search" placeholder={t("Search")} minLength={2} maxLength={156} required />
     
     
      </form>
    </div>
  </div>

  )
}

export default SearchForm