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
  margin-bottom: 1rem;
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }

  .border {
    border: inset !important;
    border-color: #ffffff !important;
    border-width: 5px !important;
    box-shadow: 4px 1px 20px 9px #00000047 !important;
    -webkit-transition: border-color 0.3s ease-in-out !important;
    transition: border-color 0.3s ease-in-out !important;
    :hover {
      border-color: #3cd0ff !important;
    }

    a {
      h1 {
        color: #ffffff;
      }
      :hover {
        text-decoration: none;
      }
    }
  }
`;
