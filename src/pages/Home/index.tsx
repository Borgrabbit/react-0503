/** @jsxImportSource @emotion/react */ 
import React from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { css, jsx } from '@emotion/react';


const HomePage : React.FC = () => {

    const navigation = useNavigate();
    const location = useLocation();
    console.log(`location=> ${JSON.stringify(location)}`)

    const loc1:any = useLocation();
    let fr1 = loc1.state?.pathname || '/';

    const loc2 = useLocation() as any;
    let fr2 = loc2.state?.pathname || '/';

    interface LocParams {
        pathname: string,
        state: object,
        search: string,
        hash: string,
        key: string
    }
    const loc3 = useLocation() as LocParams;
    let fr3 = loc3.state === null || '/';

    return (
        <>
            <div> CurrentPage: HOME</div>
            <Link 
                css={css({backgroundColor: '#eee',marginLeft: '15px'})} 
                to={'./main'}>
                \Main
            </Link>
            <div css={css({ display:"flex", flexDirection:"column" })}>
                <Link to={'./auth'}>Auth Example</Link>
                <Link to={'./file'}>File IO Example</Link>
                <Link to={'./auth_outqource'}>Auth Outqource Example</Link>
            </div>
            
            <div>
            </div>
        </>
    )
}


export default HomePage;