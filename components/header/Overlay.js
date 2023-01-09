
const Overlay = () => {

  const closeNav = (e) => {
        document.getElementById("nav-mobile").classList.remove("sidenav-open");
        e.target.classList.remove("sidenav-overlay-open");
  }



  return (
    <div className="sidenav-overlay" data-target="nav-mobile" onClick={closeNav}></div>

  )
}

export default Overlay