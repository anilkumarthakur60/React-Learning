import React from "react";

import ProfileCard from "./ProfileCard";
import a1 from "./Assets/images/a3.png";
import a2 from "./Assets/images/a3.png";
import a3 from "./Assets/images/a3.png";

export default function App1() {
    const profiles = [
        {
            id: 1,
            title: "Profile 1",
            url: a1,
            handle: "octocat",
            color: "black",
            bgColor: "bg-danger",
            link: "https://www.google.com",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci  laborum libero magnam maiores maxime"

        },
        {

            id: 2,
            title: "Profile 2",
            url: a2,
            handle: "octocat",
            color: "blue",
            bgColor: "bg-info",
            link: "https://www.google.com",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci  laborum libero magnam maiores maxime"
        },
        {

            id: 3,
            title: "Profile 3",
            url: a3,
            handle: "octocat",
            color: "white",
            bgColor: "bg-secondary",
            link: "https://www.google.com",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci  laborum libero magnam maiores maxime"

        },
        {
            id: 4,
            title: "Profile 1",
            url: a1,
            handle: "octocat",
            color: "black",
            bgColor: "bg-danger",
            link: "https://www.google.com",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci  laborum libero magnam maiores maxime"


        },

    ]
    return <>
        <div className="container">
            <div className={`row bg-danger-subtle px-3 py-4`} style={{backgroundColor: '#f8d7da'}}>

                {profiles.map((profile, index) =>

                        <div className={` col-sm-6 col-md-3 col-ld-3 col-12 mb-4  rounded rounded-lg `} key={profile.id}>
                            <ProfileCard profile={profile}/>
                        </div>
                )}

            </div>
        </div>
    </>;
}
const message1 = "How are you?";
export {message1}
export const message11 = 'I am fine';