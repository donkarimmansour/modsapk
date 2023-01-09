import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"


const List = ({list , desc , title , btn}) => {

  


  // document.querySelectorAll(".flex-item").forEach((el, i) => {

  //   arr.push({
  //     name : el.querySelector(".app-name > .truncate:nth-child(1)").textContent ,
  //     icon : "https://apkmody.io" + el.querySelector("img").getAttribute("src"),
  //     modFeatures : el.querySelector(".app-name > .truncate:nth-child(2)").textContent ,
  //     apk : el.querySelector(".app-name .app-tags .has-vivid-green-cyan-background-color") ? true : false ,
  //     mod : el.querySelector(".app-name .app-tags .has-luminous-vivid-orange-background-color") ? true : false
  //   })

  // })

  // console.log(arr)

 



  return (
    <section>
      <div className="container">

          <div className="term-heading">

          {title && <h2 className="has-medium-font-size uppercase">{title}</h2>}
            

          {btn &&
            <Link href={`/details`} >
              <div className="has-medium-font-size browse-cat">
                <i className="material-icons">
                  <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
                  </svg>
                </i>
              </div>
            </Link>

          }

          </div>

          {desc &&<p>{desc}</p> }
              
              <div className="flex-container margin-bottom-15">


                {list.map((app, ai) => {

                  return (
                    <article className="flex-item" key={ai} >
                      <Link href={`/details`} className="app clickable">
                        <div className="app-icon">
                          <img loading="lazy"  src={app.icon} alt={app.name} width={90} height={90} />
                        </div>
                        <div className="app-name truncate">
                          <div className="has-normal-font-size no-margin no-padding truncate">{app.name}</div>
                          <div className="has-small-font-size truncate">{app.modFeatures}</div>
                          <div className="app-tags has-small-font-size">
                            {app.apk && <span className="app-tag has-white-color has-vivid-green-cyan-background-color">APK</span>}
                            {app.mod && <span className="app-tag has-white-color has-luminous-vivid-orange-background-color">MOD</span>}
                          </div>
                        </div>
                      </Link>
                    </article>

                  )

               })}
          
              </div>
            </div>
          </section>
         
  )
}

export default List