import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const MainContainer = styled(Container)`
  /* max-width: 1400px; */
  max-width: 100%;
  padding: 0;
  margin: auto;
  svg.smoke--background {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
    max-height: 428px;
  }
`;
