import React from "react";
import { FullLoading } from "@root/components/Loading";
import useAuth from "./useAuth";

const AuthOutqourcePage: React.FC = () => {
    return (
        <FullLoading>
                Auth Outqource Page
                <button>
                    Google 로그인
                </button>
        </FullLoading>
    )
}

export default AuthOutqourcePage;