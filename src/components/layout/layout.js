import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ParallaxProvider } from "react-scroll-parallax";
import styled from "styled-components";

import Header from "../header/header";
import Footer from "../footer/footer";
import "./layout.css";

import { type } from "../../theme";

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
      <LayoutWrapper className="m-2 lg:m-4" style={{ position: "relative" }}>
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          abs={location.pathname === "/"}
          path={location.pathname}
        />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </LayoutWrapper>
    </ParallaxProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const LayoutWrapper = styled.div`
  p {
    color: ${type.default};
  }
`;
