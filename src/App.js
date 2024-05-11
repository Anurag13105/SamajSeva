import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './components/Landing_page/LandingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Sign-up/Sign-up';
import  Event_Detail from './components/event_details/event_detail';
import Addevent from './components/Add_event/Addevent';
import Event_listing from './event_listing/Event_listing';
import { getDoc, query } from 'firebase/firestore';
import MalikBoard from './components/MalikBoard/MalikBoard';



function App() {
  const isloginpage = window.location.pathname === '/login' || window.location.pathname === '/signup';
  return (
    <>
    <Header nav={!isloginpage} login={!isloginpage}/>
    <Router>
      <div>
        <section>
              

            <Routes>                                       
                <Route path="/" element={<LandingPage/>}/> 
               <Route path="/addevent" element={<Addevent/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/eventlsiting" element={<Event_listing/>}/>
               <Route path="/login/malikboard" element={<MalikBoard/>}/>

               

            </Routes>                    
        </section>
      </div>
    </Router>

    <Footer/>



    </>
  );
}

export default App;
