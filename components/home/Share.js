import Image from "next/image"
import { useEffect } from "react"

const Share = () => {

    
  let shareData = {}
  useEffect(() => {
    shareData = {
      'facebook': {
        url: `https://www.facebook.com/sharer.php?u=${encodeURIComponent(joinUtmStr('twitter'))}&t=${encodeURIComponent(document.title)}`
      },
      'twitter': {
        url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(joinUtmStr('twitter'))}&text=${encodeURIComponent(document.title)}`,
      },
      'tumblr': {
        url: `https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=&url=${encodeURIComponent(joinUtmStr('tumblr'))}&title=${encodeURIComponent(document.title)}`,
      },
      'reddit': {
        dialogTitle: 'Share to Reddit',
        dialogBody: 'Successfully copied the web link. You cloud share these fun content to reddit!',
        dialogConfirmBtnText: 'Go to Reddit',
        dialogConfirmBtnBg: '#3DA21B',
        url: isMobile() ? `https://www.reddit.com` : `https://www.reddit.com/submit?url=${encodeURIComponent(joinUtmStr('reddit'))}&title=${encodeURIComponent(document.title)}`,
      },
      'medium': {
        dialogTitle: 'Share to Medium',
        dialogBody: 'Successfully copied the web link. You cloud share these fun content to medium!',
        dialogConfirmBtnText: 'Go to Medium',
        dialogConfirmBtnBg: '#3DA21B',
        url: `https://medium.com${isMobile() ? '' : '/new-story'}`,
      },
      'quora': {
        dialogTitle: 'Share to Quora',
        dialogBody: 'Successfully copied the web link. You cloud share these fun content to quora!',
        dialogConfirmBtnText: 'Go to Quora',
        dialogConfirmBtnBg: '#3DA21B',
        url: `https://www.quora.com`,
      }
    }
  })

  const isMobile = () => {
    return window.innerWidth <= 992
  }

  const joinUtmStr = utm_source => {
    return `${document.URL}?utm_source=${utm_source}&utm_campaign=share&utm_medium=social_network`
  }




  const copyToClipboardStr = (text) => {
    const textArea = document.createElement('textarea')
    textArea.style.position = 'fixed'
    textArea.style.visibility = '-10000px'
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }



  const initDialog = (visible, platform, fn) => {

    const mask = document.querySelector('.mask')

    if (visible) {
      const { dialogTitle, dialogBody, dialogConfirmBtnText, dialogConfirmBtnBg } = shareData[platform]
      const title = mask.querySelector('.title')
      const body = mask.querySelector('.body')
      const footerBtn = mask.querySelector('.footerBtn')
      title.innerHTML = dialogTitle
      body.innerHTML = dialogBody
      footerBtn.innerHTML = dialogConfirmBtnText
      footerBtn.style.background = dialogConfirmBtnBg

      footerBtn.onclick = function () {
        mask.style.display = 'none'
        fn()
      }
    }
    mask.style.display = visible ? 'flex' : 'none'
  }



  const ShareClick = platform => {

    const { url } = shareData[platform]

    if (['medium', 'quora'].includes(platform) || ('reddit' === platform && isMobile())) {

      const toShare = () => {
        window.open(url, '_target', 'width=600,height=500,left=300px,top=200px')
      }

      if (window.innerWidth <= 992) {
        document.querySelector('.shareMask').style.display = "none"
        document.querySelector('.shareOpen').style.display = "block"
      }

      copyToClipboardStr(joinUtmStr(platform))

      initDialog(true, platform, toShare)

      return
    }

    window.open(url, '_target', 'width=600,height=500,left=300px,top=200px')
  }



  const shareOpen = () => {
    document.querySelector('.shareMask').style.display = "block"
    document.querySelector('.shareOpen').style.display = "none"
  }


  const shareMask = () => {
    document.querySelector('.shareMask').style.display = "none"
    document.querySelector('.shareOpen').style.display = "block"
  }


  return (
    <>
      
    <div className="thirdShareBox isPc">
      <div className="shareNumBox">
        <span className="shareNum">1170.0K</span>
        <span>Shares</span>
      </div>
      <a className="shareBtn" data-network="twitter" href="#!" onClick={() => { ShareClick("twitter") }} > 
        <img loading="lazy" className="shareIcon" src="/img/twitter.webp" />
        <span className="shareBtnLabel">twitter</span>
      </a>
      <a className="shareBtn" data-network="facebook"  href="#!" onClick={() => { ShareClick("facebook") }} >
        <img loading="lazy" className="shareIcon" src="/img/facebook.webp" />
        <span className="shareBtnLabel">facebook</span>
      </a>
      <a className="shareBtn" data-network="tumblr"  href="#!" onClick={() => { ShareClick("tumblr") }} >
        <img loading="lazy" className="shareIcon" src="/img/tumblr.svg" />
        <span className="shareBtnLabel">tumblr</span>
      </a>
      <a className="shareBtn" data-network="reddit"  href="#!" onClick={() => { ShareClick("reddit") }} >
        <img loading="lazy" className="shareIcon" src="/img/reddit.svg" />
        <span className="shareBtnLabel ml8">reddit</span>
      </a>
      <a className="shareBtn" data-network="quora"  href="#!" onClick={() => { ShareClick("quora") }} >
        <img loading="lazy" className="shareIcon" src="/img/quora.svg" />
        <span className="shareBtnLabel ml8">quora</span>
      </a>
      <a className="shareBtn" data-network="medium"  href="#!" onClick={() => { ShareClick("medium") }} >
        <img loading="lazy" className="shareIcon" src="/img/medium.svg" />
        <span className="shareBtnLabel ml8">medium</span>
      </a>
    </div>

      <div className="thirdSharePhoneBox isPhone">
        <div className="shareMask" onClick={() => { shareMask() }}>
          <div className="sharePhoneBox  slideInUp">
            <a className="sharePhoneBtn" data-network="twitter" href="#!" onClick={() => { ShareClick("twitter") }} >
              <span className="sharePhoneBtnLabel">twitter</span>
              <div className="sharePhoneIconBox" data-network="twitter"></div>
            </a>
            <a className="sharePhoneBtn" data-network="facebook" href="#!" onClick={() => { ShareClick("facebook") }} >
              <span className="sharePhoneBtnLabel">facebook</span>
              <div className="sharePhoneIconBox" data-network="facebook"></div>
            </a>
            <a className="sharePhoneBtn" data-network="tumblr" href="#!" onClick={() => { ShareClick("tumblr") }} >
              <span className="sharePhoneBtnLabel">tumblr</span>
              <div className="sharePhoneIconBox" data-network="tumblr"></div>
            </a>
            <a className="sharePhoneBtn" data-network="reddit" href="#!" onClick={() => { ShareClick("reddit") }} >
              <span className="sharePhoneBtnLabel">reddit</span>
              <div className="sharePhoneIconBox" data-network="reddit"></div>
            </a>
            <a className="sharePhoneBtn" data-network="quora" href="#!" onClick={() => { ShareClick("quora") }} >
              <span className="sharePhoneBtnLabel">quora</span>
              <div className="sharePhoneIconBox" data-network="quora"></div>
            </a>
            <a className="sharePhoneBtn" data-network="medium" href="#!" onClick={() => { ShareClick("medium") }} >
              <span className="sharePhoneBtnLabel">medium</span>
              <div className="sharePhoneIconBox" data-network="medium"></div>
            </a>
          </div>
        </div>
        <div className="shareOpen bounce" onClick={() => { shareOpen() }}></div>
      </div>

      <div className="mask">
        <div className="dialog">
          <span className="dialogClose" onClick={() => { initDialog(false) }}>
            <Image width="20" height="20" src="/img/close.webp" alt="close" />
          </span>
          <div className="title">Share to Quora</div>
          <div className="body">Successfully copied the web link. You cloud share these fun content to quora!</div>
          <div className="footer">
            <div className="footerBtn">Go to Quora</div>
          </div>
        </div>
      </div>

      </>


  )
}

export default Share