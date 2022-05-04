import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ko from './lang/ko.json'
import './App.css';

import { Provider as ReduxProvider } from 'outqource-react/redux'; 
import store from './stores';



const queryClient = new QueryClient();
const locale = navigator.language;

const App : React.FC = () => {
  return (
    <IntlProvider locale={locale} messages={ko} defaultLocale="en">
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <BrowserRouter>
            <ReduxProvider store={store}>
              <div className="App">Learn React1</div>
              <FormattedMessage id="1" defaultMessage="Today is {ts, date, ::yyyyMMdd}" values={{ts: Date.now()}} />
            </ReduxProvider>
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default App;
