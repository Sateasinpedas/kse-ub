import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import Button from "../../Components/Admin/Button/Button";
import InputAdmin from "../../Components/Admin/Input/InputAdmin";
import { app } from "../../firebase/firebase";
import Swal from "sweetalert2";

export default function Login() {
    const auth = getAuth(app);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setIsLoading(true)
                localStorage.setItem('auth', JSON.stringify(userCredential.user))
                console.log(userCredential)
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            })
            .catch((error) => {
                setIsLoading(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.code,
                });
            });
    }

    return (
        <div className="font-sans flex items-center justify-center min-h-screen bg-purple-extralight">
            <form onSubmit={handleSubmit} className="login-card p-10 rounded-lg shadow-lg md:w-[500px] bg-white">
                <div className="mb-5">
                    <h1 className="font-bold text-2xl mb-2">Login</h1>
                    <p>Welcome back! Log in to your account.</p>
                </div>
                <div className="">
                    <div className="mb-5">
                        <div className="font-bold mb-2">
                            <label>Email address</label>
                        </div>
                        <InputAdmin required onChange={(e) => { setEmail(e.target.value) }} type='email' placeholder={'email'} className='w-full' beginningIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-light">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        } />
                    </div>
                    <div>
                        <div className="font-bold mb-2">
                            <label>Password</label>
                        </div>
                        <InputAdmin required onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='password' className='w-full' beginningIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                            </svg>
                        } showPassword={showPassword} setShowPassword={setShowPassword} />
                    </div>
                </div>
                <Button type='submit' className="bg-purple text-white mt-7 mb-5 pl-6">
                    {
                    !isLoading ? 'Sign in' :
                    <div role="status">
                        <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                }</Button>
            </form>
        </div>
    );
}