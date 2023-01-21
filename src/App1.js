import React from "react";

import ProfileCard from "./ProfileCard";
import  a1 from "./Assets/images/a3.png";
import  a2 from "./Assets/images/a3.png";
import  a3 from "./Assets/images/a3.png";
export default function App1() {
    const profiles = [
        {
            title: "Profile 1",
            url: a1,
            handle: "octocat",
            color: "black",
            bgColor: "bg-danger"

        },
        {
            title: "Profile 2",
            url: a2,
            handle: "octocat",
            color: "blue",
            bgColor: "bg-info"
        },
        {
            title: "Profile 3",
            url:a3,
            handle: "octocat",
            color: "white",
            bgColor: "bg-secondary"

        },
        {
            title: "Profile 1",
            url: a1,
            handle: "octocat",
            color: "black",
            bgColor: "bg-danger"

        },
        {
            title: "Profile 1",
            url: a1,
            handle: "octocat",
            color: "black",
            bgColor: "bg-danger"

        },
        {
            title: "Profile 2",
            url: a2,
            handle: "octocat",
            color: "blue",
            bgColor: "bg-info"
        },
        {
            title: "Profile 3",
            url:a3,
            handle: "octocat",
            color: "white",
            bgColor: "bg-secondary"

        },
        {
            title: "Profile 1",
            url: a1,
            handle: "octocat",
            color: "black",
            bgColor: "bg-danger"

        },

    ]
    return <>
        <div className="container">
            <div className={`row bg-danger-subtle`} style={{backgroundColor:'#f8d7da'}}>

                {profiles.map((profile, index) =>
                    <>

                        <div className= {` col-sm-6 col-md-4 col-ld-3 col-12  rounded rounded-lg `}  key={index}>
                            <ProfileCard profile={profile} bgColor={profile.bgColor} color={profile.color} handle={profile.handle} title={profile.title} url={profile.url}/>
                        </div>
                    </>
                )}

            </div>
        </div>
    </>;
}
const message1 = "How are you?";
export {message1}
export const message11 = 'I am fine';