import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'

export const EventsPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage
}) => (
  <section className="section section--gradient">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={main.image1.image}
                          alt={main.image1.alt}
                        />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={main.image2.image}
                          alt={main.image2.alt}
                        />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <img
                        style={{ borderRadius: '5px' }}
                        src={main.image3.image}
                        alt={main.image3.alt}
                      />
                    </article>
                  </div>
                </div>
              </div>
              {/* <Testimonials testimonials={testimonials} /> */}
            </div>
          </div>
        </div>
      </div>
  </section>
)

EventsPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object,
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.string
}

const EventsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <EventsPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
    />
  )
}

EventsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default EventsPage

export const eventsPageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        full_image
      }
    }
  }
`
