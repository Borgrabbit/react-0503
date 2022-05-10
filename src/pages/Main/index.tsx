import React from "react";
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Button } from "outqource-react/components";
import './style.scss';

const MainPage: React.FC= () => {
    const nav = useNavigate();
    return(
        <div>
            MAIN PAGE
            <div className="App">Learn React1</div>
            <FormattedMessage id="1" defaultMessage="Today is {ts, date, ::yyyyMMdd}" values={{ts: Date.now()}} />
            <Button className="main_back" onClick={()=> nav(-1)}>Back</Button>
        </div>
    )
}

export default MainPage;