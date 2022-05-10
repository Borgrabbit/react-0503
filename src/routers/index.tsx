import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes } from 'react-router-dom';
import ko from '../lang/ko.json'

import { Provider as ReduxProvider } from 'outqource-react/redux'; 
import { GlobalModal, Modal, ModalProvider, ThemeProvider } from 'outqource-react/components';
import store from '../stores';
import theme from '../common/theme';

import MainRoute from './Main';
import HomeRoute from './Home';
import AuthRoute from './Auth';

const queryClient = new QueryClient();
const locale = navigator.language;

const RootRouter: React.FC = () => {
  //useInit();

  return(
    <Routes>
      {HomeRoute}
      {MainRoute}
      {AuthRoute}
    </Routes>
  );
};

const App : React.FC = () => {
  return (
    <IntlProvider locale={locale} messages={ko} defaultLocale="en">
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <BrowserRouter>
            <ReduxProvider store={store}>
              <ThemeProvider theme={theme}>
                <ModalProvider>
                  <RootRouter/>
                  <GlobalModal/>
                </ModalProvider>
              </ThemeProvider>
            </ReduxProvider>
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default App;
