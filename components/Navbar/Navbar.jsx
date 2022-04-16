import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

import ActiveLink from './ActiveLink';
import Logo from 'components/Homepage/Logo';
import SvgBackground from '../svgBackground';
import ThemeToggle from 'components/ThemeToggle';

import { StyledNavbar, StyledHeader } from './NavbarStyles';

const BlogNavbar = ({ theme, toggleTheme }) => {
  return (
    <>
      {/* <StyledHeader></StyledHeader> */}
      <SvgBackground />
      <StyledHeader>
        <StyledNavbar
          variant={theme.type}
          className='fj-navbar fj-nav-base'
          bg='transparent'
          expand='lg'
        >
          <Navbar.Brand className='fj-navbar-brand'>
            <Link href='/'>
              <a style={{ color: theme.fontColor }}>
                <Logo />
              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {/* <div></div> */}
              {/* <ThemeToggle onChange={toggleTheme} /> */}
              <Nav.Link
                as={() => (
                  <ActiveLink activeClassName='active' href='/'>
                    <a className='fj-navbar-item fj-navbar-link'>Home</a>
                  </ActiveLink>
                )}
              />

              <Nav.Link
                as={() => (
                  <ActiveLink activeClassName='active' href='/services'>
                    <a className='fj-navbar-item fj-navbar-link'>Services</a>
                  </ActiveLink>
                )}
              />

              <Nav.Link
                as={() => (
                  <ActiveLink activeClassName='active' href='/projects'>
                    <a className='fj-navbar-item fj-navbar-link'>Portfolio</a>
                  </ActiveLink>
                )}
              />

              <Nav.Link
                as={() => (
                  <ActiveLink activeClassName='active' href='/blogs'>
                    <a className='fj-navbar-item fj-navbar-link'>Blog</a>
                  </ActiveLink>
                )}
              />

              <Nav.Link
                as={() => (
                  <ActiveLink activeClassName='active' href='/contact'>
                    <a className='fj-navbar-item fj-navbar-link'>Contact</a>
                  </ActiveLink>
                )}
              />

              {/* <ThemeToggle onChange={toggleTheme} /> */}
            </Nav>
          </Navbar.Collapse>
        </StyledNavbar>
      </StyledHeader>
    </>
  );
};

export default BlogNavbar;
