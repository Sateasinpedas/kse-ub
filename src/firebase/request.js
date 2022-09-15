import { getAuth, onAuthStateChanged } from "firebase/auth"
import { doc, getDocs, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "./firebase";

const checkUser = (action) => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if(user)
            action();

        else
            console.log("you're not signed in");
    })
}

const getDatas = (setIsLoading, setDatas, ref) => {
    getDocs(ref)
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            setDatas(prevState => [...prevState, { ...doc.data(), id: doc.id }])
        })
        setIsLoading(false);
    })
    .catch(err => {
        console.log(err);
        setIsLoading(false);
    })
}

const editItem = (setIsLoading, id, item ) => {
    setIsLoading(true);
        updateDoc(doc(db, "news", id), item)
            .then(() => {
                setTimeout(() => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Success update kabar paguyuban',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setIsLoading(false);
                }, 1000);
            })
            .catch((err) => {
                setIsLoading(false);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: err.code,
                    showConfirmButton: false,
                    timer: 2000
                })
            })
}

export { checkUser, getDatas, editItem };