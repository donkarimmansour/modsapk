const path = require('path')
const { initReactI18next } = require("next-i18next")

module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: [ 'en' , 'fr' , 'vi' , 'es' , 'pt' , 'id' ],
      //localeDetection: false, 
      
      // domains: [
      //   {
      //     domain: 'example.com',
      //     defaultLocale: 'en-US',
      //   },
      //   {
      //     domain: 'example.com',
      //     defaultLocale: 'fa-US',
      //   },
      // ],
     //  use: [initReactI18next],   // this line did not affect the error in any way
      // react: { useSuspense: false } ,
      // localeStructure: '{{lng}}/{{ns}}',


    }, 
    // debug: process.env.NODE_ENV === 'development',
     localePath: path.resolve('./public/locales'),
  //  ns: ['common'],
}