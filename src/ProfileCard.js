import React from 'react';

function ProfileCard({title,url,color,handle,bgColor}) {
    // const {title,url,color,handle}= props;
    return (
        <div className={`  rounded-3 mb-3 mt-3 shadow shadow-lg ${bgColor}`}>
            <h6 className="pt-2 ps-2" style={{color: color}}>
                {title}
            </h6>
            <img className="p-2" src={url} alt={handle} title={handle} style={{width: "100px"}}/>
            {/*<pre>{JSON.stringify(props, null, 2)}</pre>*/}
        </div>
    );
}

export default ProfileCard;