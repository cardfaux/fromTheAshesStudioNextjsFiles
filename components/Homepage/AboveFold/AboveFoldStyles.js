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
    padding: 0 20px;
  }
  @media (max-width: 368px) {
    grid-template-rows: auto 6rem;
  }
  .text {
    z-index: 2;
    @media (max-width: 368px) {
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
  @media (max-width: 368px) {
    z-index: 1;
    opacity: 0.4;
  }
  svg {
    width: 35rem;
    @media (max-width: 768px) {
      width: 19rem;
    }
    @media (max-width: 368px) {
      width: 100%;
    }
  }
`;

export const HeaderIconsContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 3rem;
  margin-top: -2rem;
  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: 20px;
  }
  @media (max-width: 368px) {
    width: 100%;
    justify-content: center;
    padding-right: 0;
  }

  .wrapper {
    width: 56px;
    height: 56px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 1px solid white;
    @media (max-width: 368px) {
      z-index: 2;
    }

    .underlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: white;
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
