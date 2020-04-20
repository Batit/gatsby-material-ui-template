import { styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const drawerWidth = 240;

export const StyledAppBar = styled(AppBar)(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration:
      theme.transitions.duration[open ? "enteringScreen" : "leavingScreen"],
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  }),
}));

export const StyledToolbar = styled(Toolbar)({
  paddingRight: 24,
});

export const StyledMenuButton = styled(IconButton)(({ open }) => ({
  marginRight: 36,
  ...(open && {
    display: "none",
  }),
}));

export const StyledTitle = styled(Typography)({
  flexGrow: 1,
  color: "white",
  textDecoration: "none",
});
