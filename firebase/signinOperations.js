import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth"

// Registration
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const signupWithGoogle = (router) => {
    signInWithPopup(auth, googleProvider)
        .then(response => {
            sessionStorage.setItem("Token", response.user.accessToken)
            sessionStorage.setItem("uid", response.user.email + response.user.accessToken.slice(0,15))
            router.push("/")
        })
        .catch(err => console.log("error"))
}
export const signupWithGithub = (router) => {
    signInWithPopup(auth, githubProvider)
        .then(response => {
            sessionStorage.setItem("Token", response.user.accessToken)
            sessionStorage.setItem("uid", response.user.providerData[0].email + response.user.accessToken.slice(0,15))
            router.push("/")
        })
        .catch(err => console.log("error"))
}

