/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../Header/Header.component";
import Drawer from "../Drawer/Drawer.component";

const Layout: React.FC = ({ children }) => {
  const [isOpen, setOpen] = React.useState(false);
  function handleDrawerOpen(): void {
    setOpen(true);
  }
  function handleDrawerClose(): void {
    setOpen(false);
  }

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
    <div style={{ display: "flex" }}>
      <Header
        open={isOpen}
        onClickOpenDrawer={handleDrawerOpen}
        siteTitle={data.site.siteMetadata.title}
      />
      <Drawer open={isOpen} onClickCloseDrawer={handleDrawerClose} />
      <main>{children}</main>
    </>
    </div>
  );
};

export default Layout;
