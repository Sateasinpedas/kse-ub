import { getAuth, onAuthStateChanged } from "firebase/auth"

const checkUser = (action) => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if(user)
            action();

        else
            console.log("you're not signed in");
    })
}

export { checkUser };