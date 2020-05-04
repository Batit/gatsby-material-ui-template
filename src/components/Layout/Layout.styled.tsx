import styled from "styled-components";
import Container from "@material-ui/core/Container";
import { Theme } from "@material-ui/core/styles";

interface Props {
  open: boolean;
  theme: Theme;
}

export const StyledMain = styled.main`
  flex-grow: 1;
  height: 100vh;
  overflow: auto;
`;

export const StyledBarSpacer = styled.div`
  ${({ theme }: Props) => theme.mixins.toolbar}
`;

export const StyledContainer = styled(Container)`
  padding-top: ${({ theme }: Props) => `${theme.spacing(4)}px`};
  padding-bottom: ${({ theme }: Props) => `${theme.spacing(4)}px`};
`;
