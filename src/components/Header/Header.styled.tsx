import styled, { css } from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const drawerWidth = 240;

export const StyledMenuButton = styled(IconButton)`
  margin-right: 36px;
`;

export const StyledAppBar = styled(AppBar)`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  transition: ${({ theme, open }) =>
    theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration:
        theme.transitions.duration[open ? "enteringScreen" : "leavingScreen"],
    })};
  ${({ open }) =>
    open &&
    css`
      margin-left: drawerWidth;
      width: calc(100% - ${drawerWidth}px);
      ${StyledMenuButton} {
        display: none;
      }
    `}
`;

export const StyledToolbar = styled(Toolbar)`
  padding-right: 24px;
`;

export const StyledTitle = styled(Typography)`
  flex-grow: 1;
  color: white;
  text-decoration: none;
`;
