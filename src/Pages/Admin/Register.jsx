import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import Button from "../../Components/Admin/Button/Button";
import InputAdmin from "../../Components/Admin/Input/InputAdmin";
import { app } from "../../firebase/firebase";

export default function Register() {
    const auth = getAuth(app);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('success : ', user)
                setTimeout(() => {
                    window.location.pathname = '/admin/login'
                }, 1000);
                // ...
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className="font-sans flex items-center justify-center min-h-screen bg-purple-extralight">
            <form onSubmit={handleSubmit} className="login-card p-10 rounded-lg shadow-lg md:w-[500px] bg-white">
                <div className="mb-5">
                    <h1 className="font-bold text-2xl mb-2">Register</h1>
                    <p>Welcome back! Register to your account.</p>
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
                <Button type='submit' className="bg-purple text-white mt-7 mb-5">Sign up</Button>
                <div>Already have account? <a href="/admin/login"><span className="text-purple">Sign in</span></a></div>
            </form>
        </div>
    );
}