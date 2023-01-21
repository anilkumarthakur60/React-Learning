import React from "react";

import ProfileCard from "./ProfileCard";

export default function App1() {

    const profiles = [
        {
            title: "Profile 1",
            url: "https://avatars.githubusercontent.com/u/1?v=4",
            handle: "octocat",
            color: "red"

        },
        {
            title: "Profile 2",
            url: "https://avatars.githubusercontent.com/u/2?v=4",
            handle: "octocat",
            color: "blue"
        },
        {
            title: "Profile 3",
            url: "https://avatars.githubusercontent.com/u/3?v=4",
            handle: "octocat",
            color: "green"

        }
    ]
    return <>
        <div className="container">
            <div className={`row mt-5`}>

                {profiles.map((profile, index) =>
                    <>
                        <div className="col-4">
                            <ProfileCard color={profile.color} title={profile.title} url={profile.url}/>

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