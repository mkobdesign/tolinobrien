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
              #TolinOBrien
            </a>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy
                  className="navbar-nav"
                  items={["wedding", "accommodations", "things"]}
                  currentClassName="active"
                  rootEl={"#mainNav"}
                  offset={-75}
                >
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#wedding"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      The Wedding
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#accommodations"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Accommodations & Travel
                    </Nav.Link>
                  </li>

                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#things"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Things To Do
                    </Nav.Link>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      href="https://www.zola.com/registry/tolinobrien"
                      target="_blank"
                      className="nav-link"
                    >
                      Registry
                    </a>
                  </li> */}
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <div className="leafy"></div>
                <h1 className="font-weight-lighter fancy-names">
                  Michael O'Brien
                  <br />
                  Stephanie Tolino
                </h1>
                <span class="text-primary scrunch">&</span>
                <div className="leafy flipped"></div>
                <div className="leafyfall"></div>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}
