import React from 'react';
interface ProfileProps {
    title?: string;
    url?: string;
    handle?: string;
    color?: string;
    bgColor?: string;
    link?: string;
    description?: string;

}

function ProfileCard({profile}) {
    console.clear();
    console.log(profile);
    return (
        <>
            <div className={`card p-3 py-3 ${profile.bgColor}`}>
                <img className="card-img-top img-fluid" src={profile.url} alt={profile.handle}/>
                <div className="card-body">
                    <h5 className="card-title">{profile.title}</h5>
                    <p className="card-text">{profile?.description}</p>
                    <a href={profile.link} className="btn btn-primary" target={`_blank`}>Go</a>
                </div>
            </div>


        </>
    );
}

export default ProfileCard;