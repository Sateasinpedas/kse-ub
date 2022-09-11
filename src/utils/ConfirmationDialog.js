import { deleteDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2"
import { db } from "../firebase/firebase";

export const deleteItem = async (callback, collection, id) => {
    await deleteDoc(doc(db, collection, id))
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Success delete',
                    showConfirmButton: false,
                    timer: 2000
                })
                setTimeout(() => {
                    callback(false)
                    window.location.pathname = '/admin/dashboard';
                }, 2000);
            })
            .catch((err) => {
                callback(false)
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: err.code,
                    showConfirmButton: false,
                    timer: 2000
                })
            })
    }