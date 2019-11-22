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
        <section className="page-section" id="wedding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0 mb-3">Saturday August 1st, 2020</h2>

                <h4 className="text-center mt-0 mb-4">Ceremony & Reception</h4>
                <p className="mb-4">
                  Giorgio's <br />
                  Baiting Hollow, NY
                </p>
                <p className="mb-2">
                  <a
                    href="https://www.google.com/maps/dir//Giorgio's+Baiting+Hollow,+100+Fox+Hill+Dr,+Baiting+Hollow,+NY+11933/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x89e8605484a23319:0x6e22284be0d494a9!3e0?sa=X&ved=2ahUKEwidytiPyfvlAhXkSt8KHcWrCn0Qox0wAHoECAwQEQ"
                    target="_blank"
                  >
                    100 Fox Hill Dr <br />
                    Baiting Hollow, NY 11933
                  </a>{" "}
                </p>
                <p className="mb-4">
                  <a href="tel:631-727-6076">(631) 727-6076</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <h5 className="text-center mt-0 mb-4 text-lightly-now">
              🎉 10 Years in the Making
            </h5>
            <div className="row no-gutters flex-row">
              <div className="col-lg-20">
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
                    <div className="project-category text-white-50">'10</div>
                  </div>
                </a>
              </div>

              <div className="col-lg-20" style={{ flexGrow: "0.5268" }}>
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 4)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[4].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">'11</div>
                  </div>
                </a>
              </div>

              <div className="col-lg-20" style={{ flexGrow: "1.13" }}>
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 5)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[5].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">'12</div>
                  </div>
                </a>
              </div>

              <div className="col-lg-20">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 6)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[6].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">'13</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-20">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 7)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[7].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">'14</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="row no-gutters flex-row">
              <div className="col-lg-20" style={{ flexGrow: "1.78" }}>
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 8)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[8].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">'15</div>
                  </div>
                </a>
              </div>

              <div className="col-lg-20">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 9)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[9].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">'16</div>
                  </div>
                </a>
              </div>

              <div className="col-lg-20">
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
                    <div className="project-category text-white-50">'17</div>
                  </div>
                </a>
              </div>

              <div className="col-lg-20">
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
                    <div className="project-category text-white-50">'18</div>
                  </div>
                </a>
              </div>

              <div className="col-lg-20">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 3)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[3].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">'19</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page-section bg-darkest text-white"
          id="accommodations"
        >
          <div className="container">
            <h2 className="text-center mt-0 mb-4 text-white">
              Accommodations & Travel
            </h2>
            <div className="row">
              <div className="col-lg-6 col-md-6 text-center mb-4">
                <div className="mt-5">
                  <i className="fas fa-4x fa-hotel text-white mb-4"></i>
                  <h3 className="h4 mb-2 text-white">Holiday Inn Express</h3>
                  <p className="mb-0 text-white-50">
                    Call <a href="tel:16315481000">631 548 1000</a> to book a
                    room from the Tolino-O'Brien block.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 text-center mb-4">
                <div className="mt-5">
                  <i className="fas fa-4x fa-route text-white mb-4"></i>
                  <h3 className="h4 mb-2 text-white">Map Your Route</h3>
                  <p className="mb-0 text-white-50">
                    <a
                      href="https://www.google.com/maps/dir//Giorgio's+Baiting+Hollow,+100+Fox+Hill+Dr,+Baiting+Hollow,+NY+11933/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x89e8605484a23319:0x6e22284be0d494a9!3e0?sa=X&ved=2ahUKEwidytiPyfvlAhXkSt8KHcWrCn0Qox0wAHoECAwQEQ"
                      target="_blank"
                    >
                      Get directions
                    </a>{" "}
                    to Giorgio's.
                    <br />
                    <a
                      href="https://www.google.com/maps/dir//Holiday+Inn+East+End/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e88aac2d7fbbd1:0xd6c8c3beeee76009?sa=X&ved=2ahUKEwjqxZ6xwu3lAhUHTt8KHVROD2YQ9RcwDHoECAsQEA"
                      target="_blank"
                    >
                      Get directions
                    </a>{" "}
                    to Holiday Inn Express
                  </p>
                </div>
              </div>
            </div>
            <div style={{ maxWidth: "520px", margin: "40px auto" }}>
              <h5 align="center" className="mb-3 text-white">
                Shuttle service to and from the venue will be provided.
              </h5>
              <p align="center" className="text-white-50">
                August is peak season on the east end and rooms are being held
                on a first-come first-served basis so please book asap to
                guarantee your stay.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section" id="things">
          <div className="container">
            <h2 className="text-center mt-0 mb-4">Things to Do</h2>
            <div className="row">
              <div className="col-lg-6 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-wine-glass-alt text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Fun</h3>
                  <p className="talllines mb-0">
                    <a
                      href="https://www.paumanok.com/visit_us.html"
                      target="_blank"
                    >
                      Paumanok Vineyards
                    </a>

                    <br />
                    <a href="https://www.lispirits.com/" target="_blank">
                      Long Island Spirits Distillery
                    </a>
                    <br />
                    <a
                      href="https://www.northforkbrewingco.com/"
                      target="_blank"
                    >
                      North Fork Brewing Company
                    </a>
                    <br />
                    <a href="http://www.riverheadcider.com/" target="_blank">
                      Riverhead Cider House
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-umbrella-beach text-primary mb-4"></i>
                  <h3 className="h4 mb-2 ">Leisure & Food</h3>
                  <p className="talllines mb-0">
                    <a
                      href="https://www.google.com/maps/dir//iron+pier/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e88c01b391755d:0xad4b07a892cd6dd7?sa=X&ved=2ahUKEwjE2oezue_lAhXswVkKHTOhCkwQ9RcwFHoECAoQEA"
                      target="_blank"
                    >
                      Iron Pier Beach
                    </a>
                    <br />
                    <a href="http://www.prherbfarm.com/" target="_blank">
                      Peconic River Herb Farm
                    </a>
                    <br />
                    <a
                      href="https://www.opentable.com/cooperage-inn-restaurant"
                      target="_blank"
                    >
                      Cooperage Inn Restaurant
                    </a>
                    <br />
                    <a href="https://barrowfoodhouse.com/" target="_blank">
                      Barrow Food House
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*         
        <section className="page-section bg-darkest text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-white">Registry</h2>
            <p className="mb-5 text-white">
              You're a sweet and generous person.
            </p>
            <a
              className="btn btn-white btn-xl"
              href="https://www.zola.com/registry/obrilino"
            >
              See the Registry
            </a>
          </div>
        </section> */}

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
