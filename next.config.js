const {i18n} = require("./next-i18next.config");
require('dotenv').config()
const webpack = require('webpack');


module.exports = {
  // reactStrictMode: true,
  i18n,
  swcMinify: true,


  //trailingSlash: true,
  // basePath: '/',               
  // serverRuntimeConfig: {},


  images: {
    domains: ['https://cdn.ezjojoy.com' , 'app-cdn.acelitchi.com' , 'https://cdn.topmongo.com/'],
  },
  
  // experimental: {
  //   images: {
  //     allowFutureImage: true,
  //   },
  // },

  compiler: {
    styledComponents: true,
  },
  env: {
    API_URL: process.env.API_URL,
  },
  
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,  
  },

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

        config.plugins.push(new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }))
        
        // Important: return the modified config
        return config;
    }


  // webpack: (config, { dev, isServer }) => {
  //   // config.module.rules.push({
  //   //   test: /\.svg$/,
  //   //   use: ['@svgr/webpack'],
  //   // })

  //   if (!dev && !isServer) {
  //     // Replace three with three only in client production build
  //     Object.assign(config.resolve.alias, {
  //       'three': '~./node_modules/three',
  //     })
  //   }

  //   return config
  // },

  // future: {
  //   webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
  //     // Looks like backward compatibility approach.
  // },
  // webpack(config) {
  //   config.resolve.fallback = {
  //     ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
  //       // by next.js will be dropped. Doesn't make much sense, but how it is
  //     fs: false, // the solution
  //   };

  //   return config;
  // },
  
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve = {
  //       ...config.resolve,
  //       fallback: {
  //         ...config.resolve.fallback,
  //         fs: false,
  //       },
  //     };
  //   }
  //   config.module = {
  //     ...config.module,
  //     exprContextCritical: false,
  //   };
  //   return config;
  // },

} 
   