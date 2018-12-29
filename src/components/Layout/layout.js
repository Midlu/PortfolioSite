import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "../Header";
import "./layout.css";
import "semantic-ui-css/semantic.min.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
