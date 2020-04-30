import styled from "styled-components";
import Container from "@material-ui/core/Container";

export const StyledMain = styled.main`
  flex-grow: 1;
  height: 100vh;
  overflow: auto;
`;

export const StyledBarSpacer = styled.div`
  ${({ theme }) => theme.mixins.toolbar}
`;

export const StyledContainer = styled(Container)`
  padding-top: ${({ theme }) => `${theme.spacing(4)}px`};
  padding-bottom: ${({ theme }) => `${theme.spacing(4)}px`};
`;
