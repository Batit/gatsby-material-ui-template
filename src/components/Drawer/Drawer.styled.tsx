import styled, { css } from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import { Theme } from "@material-ui/core/styles";

const drawerWidth = 240;

interface Props {
  open: boolean;
  theme: Theme;
}

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    position: relative;
    white-space: nowrap;
    overflow-x: hidden;
    width: ${({ theme, open }: Props) =>
      `${!open ? theme.spacing(7) : drawerWidth}px`};
    transition: ${({ theme, open }: Props) =>
      theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration:
          theme.transitions.duration[
            !open ? "leavingScreen" : "enteringScreen"
          ],
      })};
    ${({ theme, open }: Props) =>
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
