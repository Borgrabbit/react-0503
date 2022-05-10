import React from "react";
import cx from 'classnames';
import { FormattedMessage } from "react-intl";

interface LoadingProps {
    when? : boolean,
    wrapperClassName?: string,
    imgClassName?: string
}

interface FullLoadingProps extends LoadingProps {
    children?: React.ReactNode,
    containerClassName?: string
}

const LoadingComponent: React.FC<LoadingProps> = ({ when= false, wrapperClassName, imgClassName}) =>{
    if(!when) return <React.Fragment/>
    
    return (
        <div className={cx('LoadingWrapper', wrapperClassName)}>
            <svg>
                <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#9b9b9b" />
                    </linearGradient>
                </defs>
                <path
                    id="img_loading"
                    d=""
                    transform=""
                    fill="url(#linear-gradient)"
                />
            </svg>
            <p className="description">
                <FormattedMessage id="2"/>
            </p>
        </div>
    );
};

export const Loading = React.memo(LoadingComponent);

const FullLoadingComponent: React.FC<FullLoadingProps> = ({children, containerClassName, when, ...props}) => {
    if (!when) return <React.Fragment>{children}</React.Fragment>

    return (
        <React.Fragment>
            {children}
            <div className={cx('FullLoadingContainer', containerClassName)}>
                <Loading when {...props}/>
            </div>
        </React.Fragment>
    )
}

export const FullLoading = React.memo(FullLoadingComponent);