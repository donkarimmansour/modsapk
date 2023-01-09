import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Index from '../components/home/Home'
import SearchForm from '../components/home/SearchForm'
import { NextSeo } from "next-seo"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Share from '../components/home/Share'


const Home = () => {

  const SEO = {
    title: "Next website",
    description: "Database of movies created with Next.js and Strapi",
  }



  return (
    <> 
    <NextSeo {...SEO} />

    <div>
      <Header />
      <Index />
      <Share />
      <Footer />
      <SearchForm />
    </div>
    </> 

  )
}

 
export default Home   
             

export async function getStaticProps({req, locale}) {
  // console.log(req.headers["accept-language"]  , locale); 
   const lcl = req?.cookies?.NEXT_LOCALE || locale 

  return {
      props: {
        ...(await serverSideTranslations(lcl, ['common' , 'faq' , 'home']))
      },
      //revalidate: 1
  }

}

