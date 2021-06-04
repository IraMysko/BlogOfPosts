import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { ThemeProvider } from 'styled-components';

import { useStore } from '../store/store';
import { GlobalStyle } from '../Styled';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  const theme = {
    colors: {
      primary: '#fafafa',
    },
  };

  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
