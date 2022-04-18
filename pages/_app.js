import { DefaultSeo } from 'next-seo';
import ThemeProvider from 'providers/ThemeProvider';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faSun,
  faMoon,
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp,
} from '@fortawesome/free-solid-svg-icons';

import SEO from '../next-seo.config';
import GlobalStyle from '../styles/GlobalStyles';

import '../styles/globals.css';
import 'highlight.js/styles/dracula.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toggle/style.css';
import '../styles/index.scss';

config.autoAddCss = false;
library.add(faSun, faMoon, faList, faBorderAll, faSortNumericDown, faSortNumericUp);

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledThemeProvider theme={theme}>
        <ThemeProvider>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledThemeProvider>
    </>
  );
}
