import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'
import Link from "gatsby"

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/">We Are Obrilino</a>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                           items={["about", "services", "portfolio", "contact"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  <li className="nav-item">
                    <Nav.Link className="" href="/accomodations">Accommodations & Travel</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#services" onClick={Scroller.handleAnchorScroll}>Things to Do</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#portfolio" onClick={Scroller.handleAnchorScroll}>Registry</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>RSVP</Nav.Link>
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
                <h1 className="text-white font-weight-bold">MICHAEL O'BRIEN <br/>Steph</h1>
                <h2 className="text-uppercase text-white font-weight-bold">Together we are Obrilino</h2>
                <hr className="divider my-4"/>
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-3">We're getting married, and you're invited.</p>
                <h4 className="text-white font-weight-bold mb-5">August 1st, 2020 • Baiting Hollow, NY</h4>
                <p id="demo"></p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about" onClick={Scroller.handleAnchorScroll}>RSVP</a>
              </div>
            </div>
          </div>
        </header>




      </>
    );
  }
  

}
