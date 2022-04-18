import styled from 'styled-components';

import PageLayout from '../../../components/Layouts/PageLayout';

export const BlogsPageContainer = styled(PageLayout)`
  max-width: 1400px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
  .row {
    row-gap: 25px;
    & > div {
      @media (max-width: 450px) {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
  }
  h1 {
    color: #3bd0ff;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: clamp(24px, 2.5vw, 30px);
    margin: 50px 0;
    text-transform: uppercase;
    position: relative;
    @media (max-width: 768px) {
      /* padding-left: 20px; */
    }
  }
  h1::before {
    content: '';
    background-color: #3bd0ff;
    width: 40px;
    height: 3px;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    @media (max-width: 768px) {
      /* margin-left: 20px; */
    }
  }
  a {
    color: #ffffff00;
  }
  .works--item {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    /* background-color: #404071; */
    border: inset;
    border-color: #ffffff;
    border-width: 5px;
    box-shadow: 4px 1px 20px 9px #00000047;
    transition: border-color 0.3s ease-in-out;
    @media (max-width: 350px) {
      aspect-ratio: auto;
    }
    ::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      background-color: #ffffff;
    }
    :hover {
      border-color: #3cd0ff;
    }
  }
  .works--item.featured {
    max-width: 100%;
    background-color: #3bd0ff;
    transform: scale(1.06);
  }
  .works--text {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    width: 100%;
    height: 100%;
    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
      z-index: 2;
    }
    h3 {
      color: #ffffff;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 700;
      font-size: clamp(22px, 3vw, 33px);
      text-transform: uppercase;
      z-index: 2;
    }
    p {
      color: #ffffff;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 400;
      font-size: 13px;
      z-index: 2;
    }
    @media (max-width: 450px) {
      padding: 10px;
    }
  }
  .phoenix--egg {
    display: flex;
    justify-content: end;
    align-items: center;
    overflow: hidden;
    svg {
      width: 471px;
      transform: rotateZ(15deg);
    }
  }

  .works--grid {
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    align-items: center;
    justify-items: center;
    gap: 25px;
    @media (max-width: 500px) {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
    a {
      color: #ffffff00;
    }
    .works--item {
      position: relative;
      width: 100%;
      aspect-ratio: 1 / 1;
      /* background-color: #404071; */
      border: inset;
      border-color: #ffffff;
      border-width: 5px;
      box-shadow: 4px 1px 20px 9px #00000047;
      transition: border-color 0.3s ease-in-out;
      ::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        background-color: #ffffff;
      }
      :hover {
        border-color: #3cd0ff;
      }
    }
    .works--item.featured {
      max-width: 100%;
      background-color: #3bd0ff;
      transform: scale(1.06);
    }
    .works--text {
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: start;
      width: 100%;
      height: 100%;
      img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        z-index: 2;
      }
      h3 {
        color: #ffffff;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
        font-size: 33px;
        font-size: clamp(22px, 3vw, 33px);
        text-transform: uppercase;
        z-index: 2;
      }
      p {
        color: #ffffff;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
        font-size: 13px;
        z-index: 2;
      }
    }
  }
`;
