import React from "react";
import Button from "../Component/Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function Section10() {
    const handleClick = () => {
        console.log("Button Clicked");
    }
    return (
        <div>
            <div>
                <Button
                    secondary
                    outline
                    rounded
                    className="mb-5"
                    onClick={handleClick}
                >
                    <GoBell />
                    Click me!!
                </Button>
            </div>
            <div>
                <Button danger outline onMouseEnter={handleClick}>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning onMouseLeave={handleClick}>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline className={`text-white`}>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Something!
                </Button>
            </div>

        </div>
    )
}

export default Section10;