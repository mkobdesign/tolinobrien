import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from "./scroller"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
  }

  render() {
    return (
      <>
        <Navbar
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/">
              WE ARE OBRILINO
            </a>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy
                  className="navbar-nav"
                  items={["about", "services", "portfolio", "contact"]}
                  currentClassName="active"
                  rootEl={"#mainNav"}
                  offset={-75}
                >
                  <li className="nav-item">
                    <a className="nav-link" href="/wedding">
                      The Wedding
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/accommodations" className="nav-link">
                      Accommodations & Travel
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="things-to-do">
                      Things to Do
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.zola.com/registry/tolinobrien"
                      target="_blank"
                      className="nav-link"
                    >
                      Registry
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={"js-scroll-trigger"}
                      href="https://www.zola.com/wedding/tolinobrien/rsvp"
                      className="nav-link"
                    >
                      RSVP
                    </a>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <div className="leafy"></div>
                <h1 className="font-weight-lighter">
                  Michael O'Brien
                  <br />
                  <span className="text-primary">+</span>
                  <br /> Stephanie Tolino
                </h1>

                <div className="leafy flipped"></div>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}
