import styled from 'styled-components';

export const FoldSection = styled.section`
  position: relative;
  max-width: 1400px;
  margin: 5rem auto 0px auto;
`;

export const FoldGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 60%;
  justify-items: center;
  align-items: center;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    position: relative;
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
  @media (max-width: 450px) {
    grid-template-rows: auto 6rem;
  }
  .text {
    z-index: 2;
    @media (max-width: 450px) {
      z-index: 2;
    }
    h1 {
      color: #3bd0ff;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      font-size: clamp(24px, 2.5vw, 30px);
    }
    h2 {
      color: #ffffff;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 400;
      text-transform: uppercase;
      margin: 30px 0;
      font-size: clamp(18px, 3vw, 41px);
    }
    p {
      color: #ffffff;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 300;
      font-size: 20px;
      width: 112%;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;

export const StyledPhoenixContainer = styled.div`
  @media (max-width: 768px) {
    justify-self: left;
  }
  @media (max-width: 450px) {
    z-index: 1;
    opacity: 0.4;
  }
  svg {
    width: 35rem;
    @media (max-width: 768px) {
      width: 19rem;
    }
    @media (max-width: 450px) {
      width: 100%;
    }
  }
`;

export const HeaderIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin-top: 0rem;
  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: 20px;
    flex-direction: column-reverse;
  }
  @media (max-width: 450px) {
    position: relative;
    width: 100%;
    justify-content: center;
    padding-right: 0;
  }

  .contact--container__inside a {
    position: relative;
    z-index: 1;
    background-color: #ec5990;
    border-color: #ec5990;
    -webkit-letter-spacing: 0.5rem;
    -moz-letter-spacing: 0.5rem;
    -ms-letter-spacing: 0.5rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    width: 100%;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    margin: 20px 0;
    padding: 16px 10px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    :hover {
      background-color: #bf1650;
      text-decoration: none;
    }
  }

  .icons--container__inside {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 6rem;
  }

  .wrapper {
    width: 56px;
    height: 56px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 1px solid white;
    transition: all 0.3s ease-in-out;
    :hover {
      outline-color: #ec5990;
      outline-width: 2px;
    }
    @media (max-width: 450px) {
      z-index: 2;
    }
    ::before {
      content: '';
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      opacity: 0.2;
    }
  }
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 11px;
  }
`;
