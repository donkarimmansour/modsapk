import List from "../home/List"
import Desc from "./Desc"
import Pagination from "./Pagination"

const Category = () => {

  const list =  [
    {
          "name": "Toca Life World",
          "icon": "https://cdn.ezjojoy.com/packages/com.tocaboca.tocalifeworld/icon_f2c9a5.png",
          "modFeatures": "v1.57.1\n• All unlocked,Building Unlocked,Character Creator Unlocked,District Unlocked,Feature Unlocked\n",
          "apk": true,
          "mod": true
      },
      {
          "name": "Among Us",
          "icon": "https://cdn.ezjojoy.com/packages/com.innersloth.spacemafia/icon_cfbcd5.png",
          "modFeatures": "v2022.12.14\n• Unlocked\n",
          "apk": true,
          "mod": true
      },
      {
          "name": "Subway Surfers",
          "icon": "https://cdn.ezjojoy.com/packages/com.kiloo.subwaysurf/icon_9a3ca6.png",
          "modFeatures": "v3.6.0\n• Unlimited Money\n",
          "apk": true,
          "mod": true
      },
      {
          "name": "Minecraft",
          "icon": "https://cdn.ezjojoy.com/packages/com.mojang.minecraftpe/icon_37987f.png",
          "modFeatures": "v1.19.60.25\n• Skin unlocked,Immortality\n",
          "apk": true,
          "mod": true
      },
      {
          "name": "Car Parking Multiplayer",
          "icon": "https://cdn.ezjojoy.com/packages/com.olzhas.carparking.multyplayer/icon_8b9a8d.png",
          "modFeatures": "v4.8.9.1.13\n• Free Purchase\n",
          "apk": true,
          "mod": true
      },
      {
          "name": "Grand Theft Auto: San Andreas",
          "icon": "https://cdn.ezjojoy.com/packages/com.rockstargames.gtasa/icon_2dc232.png",
          "modFeatures": "v2.10\n• Skin Unlocked\n",
          "apk": true,
          "mod": false
      },
      {
          "name": "Minecraft",
          "icon": "https://cdn.ezjojoy.com/packages/com.mojang.minecraftpe/icon_37987f.png",
          "modFeatures": "v1.19.60.25\n• Skin unlocked,Immortality\n",
          "apk": true,
          "mod": true
      },
      {
          "name": "Stumble Guys",
          "icon": "https://cdn.ezjojoy.com/packages/com.kitkagames.fallbuddies/icon_de844a.png",
          "modFeatures": "v0.44.2\n• Unlocked Skins\n",
          "apk": true,
          "mod": true
      },
      {
          "name": "Toca Life World",
          "icon": "https://cdn.ezjojoy.com/packages/com.tocaboca.tocalifeworld/icon_f2c9a5.png",
          "modFeatures": "v1.57.1\n• All unlocked,Building Unlocked,Character Creator Unlocked,District Unlocked,Feature Unlocked\n",
          "apk": true,
          "mod": true
      },
      {
          "name": "Grand Theft Auto V",
          "icon": "https://app-cdn.acelitchi.com:443/prod/package/2022/12/16/BUUHplP8QUvctJE.webp",
          "modFeatures": "v0.2.1 Test\n• Unlocked\n",
          "apk": true,
          "mod": true
      },
      {
          "name": "Subway Surfers",
          "icon": "https://cdn.ezjojoy.com/packages/com.kiloo.subwaysurf/icon_9a3ca6.png",
          "modFeatures": "v3.6.0\n• Unlimited Money\n",
          "apk": true,
          "mod": true
      },
      {
          "name": "Roblox",
          "icon": "https://cdn.ezjojoy.com/packages/com.roblox.client/icon_06da94.png",
          "modFeatures": "v2.555.874\n• God mode,Night mode\n",
          "apk": true,
          "mod": true
      },
      {
          "name": "Grand Theft Auto: San Andreas",
          "icon": "https://cdn.ezjojoy.com/packages/com.rockstargames.gtasa/icon_2dc232.png",
          "modFeatures": "v2.10\n• Skin Unlocked\n",
          "apk": true,
          "mod": false
      },
      {
          "name": "8 Ball Pool",
          "icon": "https://cdn.ezjojoy.com/packages/com.miniclip.eightballpool/icon_2a7d64.png",
          "modFeatures": "v5.11.2\n• 5.11.2\n",
          "apk": true,
          "mod": false
      },
      {
          "name": "CarX Street",
          "icon": "https://app-cdn.acelitchi.com:443/prod/app/12/31/3718031905344811563.webp",
          "modFeatures": "v0.8.1\n• Menu/Unlimited money\n",
          "apk": true,
          "mod": false
      },
      {
          "name": "Car Parking Multiplayer",
          "icon": "https://cdn.ezjojoy.com/packages/com.olzhas.carparking.multyplayer/icon_8b9a8d.png",
          "modFeatures": "v4.8.9.1.13\n• Free Purchase\n",
          "apk": true,
          "mod": true
      },
      {
          "name": "Among Us",
          "icon": "https://cdn.ezjojoy.com/packages/com.innersloth.spacemafia/icon_cfbcd5.png",
          "modFeatures": "v2022.12.14\n• Unlocked\n",
          "apk": true,
          "mod": true
      },
      {
          "name": "FIFA Mobile",
          "icon": "https://app-cdn.acelitchi.com:443/prod/package/2022/12/16/6fgrYFS1aAITYdo.webp",
          "modFeatures": "v18.0.02\n• Menu, Dumb Enemy, Easy Win\n",
          "apk": true,
          "mod": true
      }
  ]


  return (
    <main id="primary">
   
      <Desc />
    
      <List list={list} />

      <Pagination />



  </main>
  )
}

export default Category