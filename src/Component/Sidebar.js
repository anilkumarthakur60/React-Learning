import Link from './Link';
import {useState} from "react";

function Sidebar() {
    const linksData = useState([
        {label: 'Accordion', path: '/accordion'},
        {label: 'Dropdown', path: '/dropdown'},
        {label: 'Translate', path: '/translate'},
    ]);


    const renderLinks = linksData.map((link) => {
        return <Link key={link.path} to={link.path}>{link.label}</Link>
    });


    return (
        <div >
            {renderLinks}
<h1>akjshajs</h1>
        </div>
    );

}

export default Sidebar;
