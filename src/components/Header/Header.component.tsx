import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import {
  StyledAppBar,
  StyledToolbar,
  StyledMenuButton,
  StyledTitle,
} from "./Header.styled";

interface Props {
  siteTitle: string;
  open: boolean;
  onClickOpenDrawer(): void;
}

const Header: React.FC<Props> = ({ siteTitle, open, onClickOpenDrawer }) => (
  <StyledAppBar open={open} position="absolute">
    <StyledToolbar>
      <StyledMenuButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        open={open}
        onClick={onClickOpenDrawer}
      >
        <MenuIcon />
      </StyledMenuButton>
      <StyledTitle component="h1" variant="h6" color="inherit" noWrap>
        {siteTitle}
      </StyledTitle>
      <IconButton color="inherit">
        <AccountCircle />
      </IconButton>
    </StyledToolbar>
  </StyledAppBar>
);

export default Header;
