import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ParallaxProvider } from "react-scroll-parallax";

import Header from "../header/header";
import Footer from "../footer/footer";
import "./layout.css";

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ParallaxProvider>
      <div style={{ margin: "16px", position: "relative" }}>
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          abs={location.pathname === "/"}
        />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
