import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

import { mainListItems, secondaryListItems } from "./ListItems";
import { StyledDrawer, StyledToolbarContainer } from "./Drawer.styled";

interface Props {
  open: boolean;
  onClickCloseDrawer(): void;
}

const Drawer: React.FC<Props> = ({ open, onClickCloseDrawer }) => (
  <StyledDrawer variant="permanent" open={open}>
    <StyledToolbarContainer>
      <IconButton onClick={onClickCloseDrawer}>
        <ChevronLeftIcon />
      </IconButton>
    </StyledToolbarContainer>
    <Divider />
    <List>{mainListItems}</List>
    <Divider />
    <List>{secondaryListItems}</List>
  </StyledDrawer>
);

export default Drawer;
