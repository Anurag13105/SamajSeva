import React, {useEffect, useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth,db } from '../../firebase';
import { collection, addDoc,doc,setDoc,getDocs } from "firebase/firestore";
import './Sign-up.css'  

const Signup = () => {
    const navigate = useNavigate();

 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const[contact, setContact] = useState('')
    const[address, setAddress] = useState('')
    const[role, setRole] = useState('')
    const [current, setCurrent]=useState('')
    const[interest, setinterest] = useState([])
    const [password, setPassword] = useState('');

 
    
    const useraddon = collection(db,"Users") 

    // const fetchinterest=async()=>{
    //     const interestref = collection(db,"interests");
    //     getDocs(interestref).then((querySnapshot) => {
    //         querySnapshot.forEach(async(doc) => {
    //           setinterest(
    //             interest=> [...interest, doc.data()]
    //           ) 
    //         });
    
    //     })}

        

    // useEffect(() => {
    //     {
    //         fetchinterest();
    //     }
    //   }, []);

    
    
    


    const onSubmit = async (e) => {
        e.preventDefault()
     
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            // Signed in
            const user = userCredential.user;
            await setDoc(doc(useraddon, user.uid), {
                email: user.email, 
                Name: name,
                Contact: contact,
                Address: address,
                Role: role,
                Interests:interest,
                Id: user.uid
            })
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
        
        
    }


  
 
  return (
    <main >        
        <section>
            <div className='Signup'>
                  
                             
                        <div className="top_design">
                            <div className="logo_image">
                            <img src="./Vector (2).png" alt="" className="logo" />
                            </div>
                            <h1>Register</h1>
                            <p>Please enter your details to sign up.</p>
                        </div>                                                                            
                    <form> 
                    <div className='Form-div'>
                            <label htmlFor="Name">
                                User-Name
                            </label>
                            <input className='Form-Input'
                                type="text"
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}  
                                required                                    
                                placeholder="User-Name"                                
                            />
                        </div>


                        <div className='Form-div'>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input className='Form-Input'
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div className='Form-div'>
                            <label htmlFor="Loger type">Choose your role</label>
                            <select className='Drop-down' name="roles" id="roles" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="naukar">naukar</option>
                            <option value="malik">malik</option>
                            </select>
                        </div>

                        <div className='Form-div'>
                            <label htmlFor="contact">
                                Contact No
                            </label>
                            <input className='Form-Input'
                                type="text"
                                label="Tell Number"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)} 
                                required                                 
                                placeholder="Conatct no"              
                            />
                        </div> 

                       


                        <div className='Form-div'>
                            <label htmlFor="address">
                                Address
                            </label>
                            <input className='Form-Input'
                                type="text"
                                label="Tell Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)} 
                                required                                 
                                placeholder="Address"              
                            />
                        </div>

                        <div className='Form-div'>
                        <label htmlFor="interest">
                                Interests
                            </label>
                            <input className='Form-Input'
                                type="text"
                                label="interest"
                                value={current}
                                onChange={(e) => setCurrent(e.target.value)}  
                                required                                    
                                placeholder="interest"                                
                            />
                            <button className='display-hidden' onClick={
                                ()=>{
                                    setinterest(
                                        interest=> [...interest, current]
                                    )
                                    setCurrent('')
                                }
                            }> ADD</button>
                        </div>


                        <div className='Form-div'>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input className='Form-Input'
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button className='Login-button'
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>                   
               
            </div>
        </section>
    </main>
  )
}
 
export default Signup