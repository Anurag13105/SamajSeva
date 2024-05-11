import React, {useEffect, useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth,db} from '../../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, addDoc,doc,setDoc,getDocs } from "firebase/firestore";
// import './Sign-up.css'  

const Addevent = () => {
    const navigate = useNavigate();

    const [user,setUser]=useState('')
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [email, setEmail] = useState('')
    const[contact, setContact] = useState('')
    const[address, setAddress] = useState('')
    const [current, setCurrent]=useState('')
    const[interest, setinterest] = useState([])

 
    
    

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
        const useraddon = collection(db,"Events","event-details",user)
        let newevent={"Event_Name":name,"Event_desc":desc,"Email":email,"Contact_no":contact,"Event_Address":address,"Interests":interest,"Id":user}
        await addDoc(useraddon, {
            ongoing_events: newevent    
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.uid);
            } else {
                navigate('/login');
            }
        });
        
    
        return unsubscribe;
    }, []);
    


  
 
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
                                Event Name
                            </label>
                            <input className='Form-Input'
                                type="text"
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}  
                                required                                    
                                placeholder="Event Name"                                
                            />
                        </div>

                        <div className='Form-div'>
                            <label htmlFor="desc">
                                Event Description
                            </label>
                            <input className='Form-Input'
                                type="text"
                                label="desc"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}  
                                required                                    
                                placeholder="Description"                                
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
                            <label htmlFor="contactd">
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
                                Area of Interests
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


                     
                        <button className=''
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Submit                                
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
 
export default Addevent