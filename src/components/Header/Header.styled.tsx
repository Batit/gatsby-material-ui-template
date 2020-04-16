import { styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export const StyledToolbar = styled(Toolbar)({
  paddingRight: 24,
});

export const StyledMenuButton = styled(IconButton)({
  marginRight: 36,
});

export const StyledTitle = styled(Typography)({
  flexGrow: 1,
  color: "white",
  textDecoration: "none",
});
