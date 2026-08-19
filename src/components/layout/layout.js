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
        <ContentWrapper>
          <main>{children}</main>
          <Footer />
        </ContentWrapper>
      </LayoutWrapper>
    </ParallaxProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 1rem);

  p {
    color: ${type.default};
  }

  @media (min-width: 1024px) {
    min-height: calc(100vh - 2rem);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  main {
    background: white;
    flex: 1;
  }
`;
