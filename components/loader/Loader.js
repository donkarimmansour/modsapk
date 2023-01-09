import App from "../details/App"
import Breadcrumb from "../details/Breadcrumb"
import Versions from "../details/Versions"
import Download from "./Download"

const Loader = () => {
  return (
    <main id="primary">
      <article id="article" className="detail-article">
        <section className="container with-aside">
          <Breadcrumb />

          <App />

          <Download />
        </section>

        <section className="detail-aside">
          <Versions />

        </section>

      </article>
    </main>
  )
}

export default Loader