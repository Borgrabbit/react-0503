import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ko from '../lang/ko.json'

import { Provider as ReduxProvider } from 'outqource-react/redux'; 
import store from '../stores';

import MainRoute from './Main';

const queryClient = new QueryClient();
const locale = navigator.language;

const RootRouter: React.FC = () => {
  //useInit();

  return(
    <Routes>
      {MainRoute}
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
              <RootRouter/>
            </ReduxProvider>
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default App;
