import styled from 'styled-components';

export const ContactFormSection = styled.section`
  position: relative;
  padding-top: 30rem;
  background-color: #0f0f34;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 350px) {
    padding-top: 8rem;
  }
  h5 {
    color: #ffffff;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 38px;
    text-align: center;
    text-transform: uppercase;
  }

  span.span-write {
    color: #3bd0ff;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    display: block;

    border: 1px solid #3bd0ff;
    width: 200px;
    height: 61px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  width: 600px;
  flex-direction: column;
  margin: auto;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  width: 600px;
  margin: 4rem auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SocialBlock = styled.div`
  width: 58px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    z-index: 2;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(250, 250, 250, 0.2);
    z-index: 1;
  }
`;
