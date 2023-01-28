import React from 'react';
import ReactDOM  from "react-dom/client";
function ProfileCard({profile}) {
    return (
        <>
            <div className={`card p-2  ${profile.bgColor}`}>
                <img className="card-img-top img-fluid" style={{width:"50px"}} src={profile.url} alt={profile.handle}/>
                <div className="card-body">
                    <p className="card-title">{profile.title}</p>
                    <a href={profile.link} className="btn btn-primary" target={`_blank`}>Go</a>
                </div>
            </div>


        </>
    );
}

export default ProfileCard;