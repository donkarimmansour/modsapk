import Breadcrumb from "./Breadcrumb"
import App from "./App"
import Info from "./Info"
import Desc from "./Desc"
import Versions from "./Versions"
import Reviews from "./Reviews"
import Features from "./Features"

const Details = () => {
  return (
    <main id="primary">

      <article id="article" className="detail-article">
        
        <section className="container with-aside">

          <Breadcrumb />


          <App />
          <Info />
          <Features />

          <Desc />

        </section>

        <section className="detail-aside">
          <Versions />
        </section>

      </article>

      <article className="detail-article">

        <section className="container with-aside">
          <Reviews />
        </section>

      </article>
    </main>
  )
}

export default Details