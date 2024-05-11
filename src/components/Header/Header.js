import React from 'react';
import './Header.css';

const Header = (props) => {
    return (<>
    {/* <div className="header">
        <div className="leftside">
            <div className="Logo">
                <img src="./Vector (2).png" alt="" />
                <p>SamajSeva</p>
            </div>
            <div className="nav">
                <ul>
                    <li className="items">Home</li>
                    <li className="items">About</li>
                    <li className="items">Services</li>
                    <li className="items">Gallery</li>
                    <li className="items">Contact</li>
                </ul>
            </div>
        </div>
        <div className="rightside">
            <button>Login</button>
        </div>
    </div> */}
    <div className="header">
        <div className="leftside">
            <div className="Logo">
                <img src="./Vector (2).png" alt="" />
                <p onClick={()=>{window.location.pathname="/"}}>SamajSeva</p>
            </div>
          <div className="nav">
    {props.nav && !(props.M) ? (
        <ul className="flex">
            {/* <li className="items">Home</li>
            <li className="items">Bio</li>
            <li className="items">About</li>
            <li className="items">Contact</li> */}
        </ul>

    ) : null}
    {props.M ?(
         <ul className="flex">
         <li className="items">Dashboard</li>
     </ul>
    ): null }
</div>
        </div>
        <div className="rightside">
    {props.login ? (
        <button className='login-btn' onClick={()=>{window.location.pathname="/login"}}>Login</button>
    ) : null}
    
</div>

    </div>

    </>);
}
export default Header;