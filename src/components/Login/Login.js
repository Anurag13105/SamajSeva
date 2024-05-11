import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { getDocs, collection, query,where } from 'firebase/firestore'; // Import Firestore functions
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('naukar');

    // const fetchUserDetails = async (id) => {
    //     const ref = collection(db, "Users");
    //     const querySnapshot = await getDocs(ref);
    //     querySnapshot.forEach((doc) => {
    //         if (doc.data().Id === id) {
    //             if (doc.data().Role === "malik") {
    //                 setRole("malik");
    //             }
    //         }
    //     });
    // };

    // const fetchUserDetails = async (id) => {
    //     const ref = collection(db, "Users");
    //     const q = query(ref, where("Id", "==", id));
    //     getDocs(q).then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             if (doc.data().Role === "malik") {
    //                 setRole("malik");
    //             }
    //         });
    //     });
    // };
    




    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // fetchUserDetails(user.uid); // No need to assign to data, directly call fetchUserDetails
                if (role=="malik") {
                    navigate("./malikboard")
                }
                else{
                    navigate("/eventlsiting")
                }
               
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <>
            <main>
                <section>
                    <div className='Sign-in'>
                        <div className="top_design">
                            <div className="logo_image">
                                <img src="./Vector (2).png" alt="" className="logo" />
                            </div>
                            <h1>Welcome Back!</h1>
                            <p>Please enter your details to sign in.</p>
                        </div>


                        <form>
                            <div className='Form-div'>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    className="Form-Input"
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className='Form-div'>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className='Form-Input'
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className='Form-div'>
                                <label htmlFor="Loger type">Choose your role</label>
                                <select className='Drop-down' name="roles" id="roles" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="naukar">naukar</option>
                                <option value="malik">malik</option>
                                </select>
                            </div>

                            <div className='Login-div'>
                                <button className='Login-button'
                                    onClick={onLogin}
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Login;
