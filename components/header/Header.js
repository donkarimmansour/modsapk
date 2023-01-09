import Nav from "./Nav"
import { useState , useEffect } from "react";
import NavMobile from "./NavMobile";
import Overlay from "./Overlay";
import Logo from "./Logo";

const Header = () => {

  const openNav = () => {
    document.getElementById("nav-mobile").classList.add("sidenav-open");
    document.querySelector(".sidenav-overlay").classList.add("sidenav-overlay-open");
  }


  const openSearchForm = () => {
    document.getElementById("search-form").classList.add("open")

    setTimeout(function () {
      document.getElementById("search-input").focus();
    }, 250)
  }

  return (
    <>

    <header id="header" className="has-white-background-color">
         
    <nav className="container">

      <a href="#!" data-target="nav-mobile" onClick={openNav} className="sidenav-trigger hide-on-large-only" aria-label="Open Menu">
        <i className="material-icons">
          <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z">
            </path>
          </svg>
        </i>
      </a>

     <Logo />


      <a className="clickable modal-trigger right" href="#!" aria-label="Open Search" id="open-search" onClick={openSearchForm}>
        <i className="material-icons">
          <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
            </path>
          </svg>
        </i>
      </a>

      <Nav />

    </nav>
  
  
  </header>


      
     <NavMobile />
     <Overlay />


</>

  )
}

export default Header