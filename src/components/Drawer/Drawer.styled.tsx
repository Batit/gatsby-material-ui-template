import styled, { css } from "styled-components";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 240;

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    white-space: nowrap;
    overflow-x: hidden;
    width: ${({ theme, open }) =>
      `${!open ? theme.spacing(7) : drawerWidth}px`};
    transition: ${({ theme, open }) =>
      theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration:
          theme.transitions.duration[
            !open ? "leavingScreen" : "enteringScreen"
          ],
      })};
    ${({ theme, open }) =>
      !open &&
      css`
        ${theme.breakpoints.up("sm")} {
          width: ${theme.spacing(9)}px;
        }
      `};
  }
`;

export const StyledToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`;
