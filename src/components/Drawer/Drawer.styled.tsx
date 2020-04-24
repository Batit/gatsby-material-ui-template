import { styled } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 240;

export const StyledPaperDrawer = styled(Drawer)(({ theme, open }) => ({
  position: "relative",
  whiteSpace: "nowrap",
  width: !open ? theme.spacing(7) : drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration:
      theme.transitions.duration[!open ? "leavingScreen" : "enteringScreen"],
  }),
  ...(!open && {
    overflowX: "hidden",
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  }),
}));

export const StyledDrawer = styled(Drawer)({});

export const StyledToolbarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0 8px",
  ...theme.mixins.toolbar,
}));
