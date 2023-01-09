import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import SearchForm from '../components/home/SearchForm'
import Share from '../components/home/Share'
import Index from '../components/loader/Loader'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Loader = () => {
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


export default Loader

export async function getStaticProps({req, locale}) {
  // console.log(req.headers["accept-language"]  , locale); 
   const lcl = req?.cookies?.NEXT_LOCALE || locale 

  return {
      props: {
        ...(await serverSideTranslations(lcl, ['common' , 'faq' , 'download']))
      },
      //revalidate: 1
  }

}
