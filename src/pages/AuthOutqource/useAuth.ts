import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const googleAuthProvider = new GoogleAuthProvider();

type TUseAuth = {
    isLogined: boolean;

    onSignInGoogle: () => Promise<void>;
}

// const useAuth = (): TUseAuth => {
//     const onSignInGoogle = useCallback(async () => {
//         try{
//             const { user } = await signInWithPopup(firebaseAuth)
//         } catch (err) {
//             console.log(err);
//         }
//     });
// }

const useAuth = (): number => {
    return 1;
}

export default useAuth;