import { Button } from "outqource-react/components";
import React from "react";
import {useNavigate, useLocation, Navigate} from "react-router-dom";
import { JsxEmit } from "typescript";

const AuthPage: React.FC = () => {
    return (
        <AuthProvider>
        <div>
            Auth Page
            <RequireAuth>
                <PrivatePage></PrivatePage>
            </RequireAuth>
            <LoginPage></LoginPage>
        </div>
        </AuthProvider>
    )
}

const mockAuthProvider = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
        mockAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    signout(callback: VoidFunction) {
        mockAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    }
}

interface AuthContextType {
    user: any;
    signin: (user:string, callback:VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

function AuthProvider({children}: {children: React.ReactNode}) {
    let [user, setUser] = React.useState<any>(null);

    let signin = (newUser: string, callback: VoidFunction) => {
        return mockAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        })
    }

    let signout = (callback: VoidFunction) => {
        return mockAuthProvider.signout(()=>{
            setUser(null);
            callback();
        })
    }

    let value = { user, signin, signout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

let AuthContext = React.createContext<AuthContextType>(null!);

function useAuth() {
    return React.useContext(AuthContext);
}

function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();

    if(!auth.user) {
        return <p>NOT LOGGED IN</p>;
    }

    return (
        <p>
            userName : {auth.user}
            <Button
                onClick={ () => {
                    auth.signout(() => navigate("/"))
            }}>
                SignOut
            </Button>
        </p>
    )
}

function RequireAuth({children}:{children: JSX.Element}) {
    let auth = useAuth();
    let location = useLocation();

    if(!auth.user) {
        return <Navigate to="/auth" state={{from: location}} replace />;
    }

    return children;
}

function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();
  
    
    // let from = location.state?.from?.pathname || "/";
  
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      let formData = new FormData(event.currentTarget);
      let username = formData.get("username") as string;
  
      auth.signin(username, () => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.

        // navigate(from, { replace: true });
        navigate(-1);
      });
    }
  
    return (
      <div>
        {/* <p>You must log in to view the page at {from}</p> */}
        <p>You must log in to view the page at test</p>
  
        <form onSubmit={handleSubmit}>
          <label>
            Username: <input name="username" type="text" />
          </label>{" "}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

const PublicPage : React.FC = () => {
    return <h4>PUBLIC</h4>;
}
const PrivatePage : React.FC = () => {
    return <h4>PRIVATE</h4>;
}

export default AuthPage;