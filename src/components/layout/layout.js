import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ParallaxProvider, useController } from "react-scroll-parallax";
import styled from "styled-components";

import Header from "../header/header";
import Footer from "../footer/footer";
import "./layout.css";

import { type } from "../../theme";

const ParallaxCache = () => {
  const { parallaxController } = useController();

  useLayoutEffect(() => {
    const handler = () => parallaxController.update();
    window.addEventListener("load", handler);
    return () => window.removeEventListener("load", handler);
  }, [parallaxController]);

  return null;
};

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
      <LayoutWrapper style={{ margin: "16px", position: "relative" }}>
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
      <ParallaxCache />
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
