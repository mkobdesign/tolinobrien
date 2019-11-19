import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
  }

  handlePortfolioClick(index, e) {
    e.preventDefault()
    this.setModal(true, index)
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    })
  }

  render() {
    return (
      <div className="body-accommodations">
        <Layout>
          <SEO title="Accomodations" />
          <section className="page-section bg-pic bg-a" id="about">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2 className="text-white mt-0">
                    How to get here
                    <br />
                    and how stay here.
                  </h2>
                  <hr className="divider light my-4" />
                  <p className="text-white mb-4">
                    Most people are staying at the Residence Inn.
                  </p>
                  <a
                    className="btn btn-light btn-xl js-scroll-trigger mb-5"
                    href="#services"
                    onClick={Scroller.handleAnchorScroll}
                  >
                    Book a room at the Holiday Inn Express
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section" id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 ml-auto text-center mb-5 mb-lg-0">
                  <div className="mt-2">
                    <i className="fas fa-4x fa-hotel text-primary mb-4"></i>
                    <h3 className="h4 mb-2">The Holiday Inn Express</h3>
                    <p className="text-muted mb-0">
                      <a
                        href="https://www.google.com/search?q=Holiday+Inn+East+End&oq=holiday+in&aqs=chrome.0.69i59j69i57j69i59l3j69i64.1248j0j1&sourceid=chrome&ie=UTF-8"
                        target="_blank"
                      >
                        Book a room
                      </a>{" "}
                      from our block.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 mr-auto text-center">
                  <div className="mt-2">
                    <i className="fas fa-4x fa-car text-primary mb-4"></i>
                    <h3 className="h4 mb-2">If You're Driving</h3>
                    <p className="mb-0">
                      <a href="http://bit.ly/2kyborp" target="_blank">
                        Get directions
                      </a>{" "}
                      to Giorgio's.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-10">
                <div className="col-lg-8 m-auto text-center mb-5 mb-lg-0">
                  <div className="mt-2">
                    <i className="fas fa-4x fa-hotel text-primary mb-4"></i>
                    <h3 className="h4 mb-2">Griorgio's Baiting Hollow</h3>
                    <p className="mb-0">
                      <a
                        href="https://www.google.com/search?q=residence+in+east+end&oq=residence+in+east+end&aqs=chrome..69i57.2745j0j1&sourceid=chrome&ie=UTF-8"
                        target="_blank"
                      >
                        100 Fox Hill Dr <br />
                        Baiting Hollow, NY 11933
                      </a>{" "}
                      <br />
                      <a href="tel:631-727-6076">(631) 727-6076</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    )
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "portfolio/fullsize/*.jpg" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
