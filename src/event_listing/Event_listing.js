import React, { useEffect, useState } from "react";
import Block from "./block";
import "./Event_listing.css";
import { auth, db } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, serverTimestamp, where } from "firebase/firestore";


let lists =['./images/image 1.png'
,           "./images/Vector (1).png",
            "./images/Vector (2).png",
            "./images/Vector (3).png",
            "./images/Vector (4).png",
            "./images/Vector.png",
  ]


const Event_listing = () => {
    const [user, setUser] = useState('');
    const [malik, setMalik] = useState([]);
    const [events, setEvents] = useState([]);
    const [sort, setSort] = useState('ALL');


    const findmaliks = async () => {
        let maliks = [];
        const q = query(collection(db, "Users"), where("Role", "==", "malik"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            maliks.push(doc.id);
            setMalik(maliks);
        }
    );
    }

    useEffect(()=>{
        findmaliks()
    })

    const fetchEvents = async () => {
        setEvents(()=>[])
        for (let i = 0; i < malik.length; i++) {
            const q = query(collection(db, "Events", "event-details", malik[i]));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setEvents(()=>[...events, doc.data()]);
            });
        }
        

    };
    
   


  
    return (
        <>
            <div className="Event-container">
                <div className="head">
                    <h2>Top Events in Delhi</h2>
                    <input className='Form-Input'
                        type="text"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        required
                        placeholder="Filter by interests"
                    />
                    <button onClick={fetchEvents}>Filter</button>
                </div>

                <div className="Event-main">
                    {
                        events.map((event, index) => {
                            return <Block
                                key={index} // Use index as key if each doc doesn't have a unique id
                                image={lists[index % 6]}
                                name={event.ongoing_events.Event_Name}
                                
                                volunteers={(index+40) % 6}
                                location={event.ongoing_events.Event_Address}
                                date={`${(index+30) % 6} june 2024`}
                            />
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Event_listing;
