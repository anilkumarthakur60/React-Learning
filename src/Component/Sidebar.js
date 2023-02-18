  import Link from './Link';

function Sidebar() {
    const links = [
        { label: 'Dropdown', path: '/dropdown' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/button' },
        { label: 'Modal', path: '/modal' },
        // { label: 'Table', path: '/table' },
        { label: 'section15', path: '/section15' },
        { label: 'section16', path: '/section16' },
        { label: 'section17', path: '/section17' },
        { label: 'Section18', path: '/section18' },
        { label: 'Section19', path: '/section19' },
        { label: 'Section20', path: '/section20' },
        { label: 'Section21', path: '/section21' },
    ];

    const renderedLinks = links.map((link) => {
        return (
            <Link key={link.label} to={link.path} activeClassName="font-extrabold  border-l-4 border-blue-500 pl-3 text-lg">
                {link.label}
            </Link>
        );
    });

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;