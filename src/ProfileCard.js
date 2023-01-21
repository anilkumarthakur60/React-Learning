import React from 'react';

function ProfileCard(props) {
    return (
        <div>
            <h6 style={{color: props.color}}>
                {props.title}
            </h6>
            <img src={props.url} alt={props.handle} style={{width: "100px"}}/>




            {/*<pre>{JSON.stringify(props, null, 2)}</pre>*/}
        </div>
    );
}

export default ProfileCard;