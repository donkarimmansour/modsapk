import { appWithTranslation } from 'next-i18next'
import '../styles/color.css'
import '../styles/share.css'
import '../styles/style.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return  <Component {...pageProps} />
          
}

export default appWithTranslation(MyApp)
