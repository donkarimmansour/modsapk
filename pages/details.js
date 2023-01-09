import Header from '../components/header/Header'
import Index from '../components/details/Details'
import Footer from '../components/footer/Footer'
import SearchForm from '../components/home/SearchForm'
import Share from '../components/home/Share'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Details = () => {
  return (
    <div>
      <Header />
      <Index />
      <Share />
      <Footer />
      <SearchForm />
    </div>

  )
}


export default Details

export async function getStaticProps({req, locale}) {
  // console.log(req.headers["accept-language"]  , locale); 
   const lcl = req?.cookies?.NEXT_LOCALE || locale 

  return {
      props: {
        ...(await serverSideTranslations(lcl, ['common' , 'details']))
      },
      //revalidate: 1
  }

}

