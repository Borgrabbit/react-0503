import React from "react";
import { IntlProvider, FormattedMessage } from 'react-intl';

const MainPage: React.FC= () => {
    return(
        <div>
            MAIN PAGE
            <div className="App">Learn React1</div>
              <FormattedMessage id="1" defaultMessage="Today is {ts, date, ::yyyyMMdd}" values={{ts: Date.now()}} />
        </div>
    )
}

export default MainPage;