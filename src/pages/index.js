import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import TransitionLink from "gatsby-plugin-transition-link"

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
      <Layout>
        <SEO title="TolinOBrien Wedding" />
        <section className="page-section" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0 mb-3">The Wedding</h2>
                <p className="mb-5">
                  Saturday August 1st, 2020
                  <br />
                  4:00pm
                  <br />
                  Cocktail Attire
                </p>
                <a
                  className="btn btn-light btn-xl js-scroll-trigger mb-5"
                  href="#accommodations"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Rsvp
                </a>
                <h4 className="text-center mt-0">Ceremony & Reception</h4>
                <p className="mb-4">
                  Giorgio's <br />
                  Baiting Hollow, NY
                </p>
                <a href="/wedding" className="mb-5">
                  Learn more about the reception space.
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 0)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[0].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/2.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 1)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[1].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/3.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 2)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[2].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="accommodations">
          <div className="container">
            <h2 className="text-center mt-0 mb-4">Accommodations & Travel</h2>
            <div className="row">
              <div className="col-lg-4 col-md-4 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-hotel text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Residence Inn</h3>
                  <p className="mb-0">
                    <a
                      href="https://www.google.com/search?q=residence+in+east+end&oq=residence+in+east+end&aqs=chrome..69i57.2745j0j1&sourceid=chrome&ie=UTF-8"
                      target="_blank"
                    >
                      Book a room
                    </a>{" "}
                    from our block.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-hotel text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Air B&B</h3>
                  <p className="mb-0">Feeling fancy? Book a whole house.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-route text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Map Your Route</h3>
                  <p className="mb-0">
                    <a href="http://bit.ly/2kyborp" target="_blank">
                      Get directions
                    </a>{" "}
                    to Giorgio's.
                  </p>
                </div>
              </div>
              <a className="btn btn-light btn-xl mt-5" href="/accommodations">
                More info on hotels and travel
              </a>
            </div>
          </div>
        </section>

        <section className="page-section bg-primary" id="things">
          <div className="container">
            <h2 className="text-center mt-0 mb-4">Things to Do</h2>
            <div className="row">
              <div className="col-lg-4 col-md-4 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-user-friends text-primary mb-4"></i>
                  <h3 className="h4 mb-2 ">Friend Fun</h3>
                  <p className="mb-0">
                    Our themes are updated regularly to keep them bug free!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-wine-glass-alt text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Wine Tours</h3>
                  <p className="mb-0">East end wineries & more.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-umbrella-beach text-primary mb-4"></i>
                  <h3 className="h4 mb-2 ">Beach n Shit</h3>
                  <p className=" mb-0">
                    Click here to get directions on Google Maps.
                  </p>
                </div>
              </div>
              <a className="btn btn-light btn-xl mt-5" href="/things-to-do">
                See more info on things to do.
              </a>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-white">Registry</h2>
            <p className="mb-5 text-white">
              You're a sweet and generous person.
            </p>
            <a
              className="btn btn-cream btn-xl"
              href="https://www.zola.com/registry/obrilino"
            >
              See the Registry
            </a>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0 mb-4">
                  Will you take this trip to be our lawfully wedded guest?
                </h2>
                <p className="mb-5">
                  Click this button to let us know if you can make it.
                </p>
                <a
                  className="btn btn-primary btn-xl"
                  href="https://mkobdesign.com"
                >
                  RSVP
                </a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal
          show={this.state.modalShow}
          onHide={() => this.setModal(false, 0)}
        >
          <PortfolioCarousel
            images={this.props.data.images.edges}
            current={this.state.modalCurrent}
          />
        </PortfolioModal>
      </Layout>
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
