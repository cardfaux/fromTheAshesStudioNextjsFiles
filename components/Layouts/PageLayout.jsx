import styled from 'styled-components';
import { MainContainer } from './PageLayoutStyles';

import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import { useTheme } from 'providers/ThemeProvider';

export default function PageLayout({ children, className }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <StyledWrapper className={theme.type}>
      <Head>
        {/* <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap'
          rel='stylesheet'
        /> */}
      </Head>
      <MainContainer>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className='page-footer'>
          <div className='page-footer-grid'>
            <div>
              <h6 className='footer-heading'>from the ashes studio</h6>
              <p className='footer-body'>
                It is a long established fact that a reader
              </p>
            </div>
            <div className='justify-self-end'>
              <span className='grid-heading'>contact us</span>
              <ul className='footer-links-bottom'>
                <li>
                  <a href='#!'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='#!'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='#!'>Lorem Ipsum</a>
                </li>
              </ul>
            </div>
            <div className='justify-self-end'>
              <span className='grid-heading'>our services</span>
              <ul className='footer-links-bottom'>
                <li>
                  <a href='#!'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='#!'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='#!'>Lorem Ipsum</a>
                </li>
              </ul>
            </div>
            <div className='justify-self-end'>
              <span className='grid-heading'>about us</span>
              <ul className='footer-links-bottom'>
                <li>
                  <a href='#!'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='#!'>Lorem Ipsum</a>
                </li>
                <li>
                  <a href='#!'>Lorem Ipsum</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className='bottom-part'>
          <span className='span-bold'>Lorem Ipsum 2022</span>
          <div className='justify-self-end bottom-flex'>
            <span className='span-blue margin-right'>Lorem Ipsum</span>
            <span className='span-blue'>Lorem Ipsum</span>
          </div>
        </div>
      </MainContainer>
      <style jsx global>
        {`
          html,
          body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
          }
        `}
      </style>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
  .page-wrapper {
    z-index: 2;
    position: relative;
  }

  .page-footer {
    position: relative;
  }

  .page-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: -1;
  }

  .page-footer-grid {
    display: grid;
    grid-template-columns: auto auto auto auto;
    max-width: 1400px;
    margin: auto;
    @media (max-width: 768px) {
      grid-template-columns: 100%;
    }
  }

  h6.footer-heading {
    color: #ffffff;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 25px;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 2rem;
  }

  p.footer-body {
    color: #ffffff;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 19px;
    text-align: left;
    position: relative;
  }

  p.footer-body::before {
    content: '';
    background-color: #3bd0ff;
    width: 40px;
    height: 3px;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(2rem);
  }

  .justify-self-end {
    justify-self: end;
    @media (max-width: 768px) {
      justify-self: auto;
    }
  }

  .grid-heading {
    color: #ffffff;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
    text-align: left;
    display: block;
    margin-bottom: 2rem;
  }

  ul.footer-links-bottom {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul.footer-links-bottom li {
    text-align: left;
  }

  ul.footer-links-bottom li a {
    color: #ffffff;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 20px;
  }

  .bottom-part {
    background-color: #0f0f34;
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 2rem 4rem;
    @media (max-width: 768px) {
      grid-template-columns: 100%;
    }
  }

  .span-bold {
    color: #ffffff;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 30px;
    text-align: left;
  }

  .span-blue {
    color: #3bd0ff;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 30px;
    text-align: left;
    @media (max-width: 768px) {
      display: block;
    }
  }

  .margin-right {
    margin-right: 5rem;
  }
`;
