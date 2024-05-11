import React from "react";
import "./event_detail.css";
const Event_Detail =(props) =>{
    return(
        <>
        <div className="Space_container">
        <div className="Event_Detail_Container">
        <div className="image_side"><img src={props.image} alt="" /></div>
        <div className="detail_side">
            <h1>{props.name}</h1>
            <p>{props.location}</p>
            <div className="event_details_Event_Details">
                                <div className="volunteers">
                                    <img src="./Group (2).png" alt="" />
                                    <p>{props.volunteers}</p>
                                    </div>
                                <div className="event_date">
                                    <img src="./Group (3).png" alt="" />
                                    <p>{props.date}</p></div>
                            </div>
                            <button className="button-event-details">APPLY NOW</button>
        </div>
               
        </div>
        </div>
        </>
    )
}

export default Event_Detail;