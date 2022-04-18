import styled from 'styled-components';

export const ServicesHeaderContainer = styled.section`
  max-width: 1400px;
  margin: auto;
`;

export const ServicesContainer = styled.section`
  grid-template-columns: repeat(auto-fit, minmax(452px, 1fr));
  display: grid;
  max-width: 1400px;
  margin: auto;
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;
