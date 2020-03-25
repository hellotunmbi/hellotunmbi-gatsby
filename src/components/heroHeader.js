import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              role
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="role">{data.site.siteMetadata.home.role}</div>
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.description}</p>
        </div>
        <Link to="/contact" className="button -primary">
          Get in touch &rarr;
        </Link>
      </div>
    )}
  />
);
