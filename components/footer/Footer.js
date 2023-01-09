import Contacts from "./Contacts"
import Copyright from "./Copyright"
import Languages from "./Languages"
import Links from "./Links"

const Footer = () => {
  return (
    <footer className="has-very-light-gray-background-color has-small-font-size padding-top-30 padding-bottom-100">
      <div className="container">
        <section>
          <Links />

          <div>
            <div>
              <div className="inline-block left">
                <Contacts />

              </div>
              <Languages />

            </div>
            <div className="clearfix" />
            <Copyright />
            
          </div>
        </section>
      </div>
    </footer>

  )
}

export default Footer