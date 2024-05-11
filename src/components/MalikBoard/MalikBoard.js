import React from "react";
import "./MalikBoard.css";
import Block from "../../event_listing/block";
const MalikBoard=()=>{
    return(
        <>
        <div className="Space_container_MalikBoard">
            <div className="upper">
                <h1>
                Let’s organize your
next Event.
                </h1>

                <button class="MalikBoardButton" onClick={()=>{window.location.pathname="/addevent"}}>Register a New Event</button>
            </div>
            <div className="lower">
                <h2>Posted Events</h2>
                <br />
                <div className="posted-event-main">
                <Block image="./image 1 (1).png" name="StartUp Networking Arena" location="Preet Vihar, Delhi" volunteers="120 Volunteers" date="12th August, 2021"/>
                <Block image="./image 1 (1).png" name="StartUp Networking Arena" location="Preet Vihar, Delhi" volunteers="120 Volunteers" date="12th August, 2021"/>
                <Block image="./image 1 (1).png" name="StartUp Networking Arena" location="Preet Vihar, Delhi" volunteers="120 Volunteers" date="12th August, 2021"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default MalikBoard;