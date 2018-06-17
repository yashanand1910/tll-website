import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import jumbotron from '../img/jumbotron.jpg'
import logo from '../img/logo.jpg'
import SimpleSlider from '../components/SimpleSlider'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
      <div
        className="full-width-image-container margin-top-0"
        style={{ backgroundImage: `url(${jumbotron})` }}
      >
      </div>
      <section className="section">
        <div className="container">
          <div className="columns">
          <div className="column is-10 is-offset-1">
            <SimpleSlider/>
            <div className="content margin-top-100">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                  key={post.id}
                >
                  <Link to={post.fields.slug}>
                    <h3 className="has-text-primary">{post.frontmatter.title}</h3>
                  </Link>
                  <small>{post.frontmatter.date}</small>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
            </div>
            </div>
        </div>
      </section>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
