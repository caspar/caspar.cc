import React from "react"
import { Link } from "gatsby"
// import { Image } from "gatsby"
// import './logo.png'

// import logo from "./logo.png"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Projects</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About Me</Link>
              </li>
              {/* <li className="nav-cv" role="menuitem">
                <Link to='http://caspar.cc/CASPAR_LANT_CV.pdf'>CV</Link>
              </li> */}
              {/* <li className="nav-elements" role="menuitem">
                <Link to={'https://calendly.com/casparlant/call'}>Elements</Link>
              </li> */}
              <a
                href="CASPAR-LANT-CV.pdf"
                title="CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to="/">
              <br />
              <img src="/logo.png" height="99%" alt="caspar.cc site logo"></img>
              {/* {title} */}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/casparlant"
                title="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/caspar"
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://calendly.com/casparlant/30min"
                title="Calendly"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendly
              </a>
              {/* <Link
                to={`/rss.xml`}
                title="RSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS
              </Link> */}
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link>
      </footer>
    </div>
  )
}

export default Layout
