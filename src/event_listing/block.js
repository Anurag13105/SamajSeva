import React from "react";
import "./block.css";
const Block = (props) => { 
    return (
        <>
        <div className="block">
                        <div className="block-top">
                            <img src={props.image} alt="" />
                        </div>

                        <div className="block-bottom">
                            <div className="event_name">
                                <h3>{props.name}</h3>
                                <span>{props.location}</span>
                            </div>
                            <div className="event_details">
                                <div className="volunteers">
                                    <img src="./Group (2).png" alt="" />
                                    <p>{props.volunteers}</p>
                                    </div>
                                <div className="event_date">
                                    <img src="./Group (3).png" alt="" />
                                    <p>{props.date}</p></div>
                            </div>
                        </div>
         </div>
        </>
    )
}

export default Block;