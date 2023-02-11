  import Link from './Link';

function Sidebar() {
    const links = [
        { label: 'Dropdown', path: '/dropdown' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/button' },
        { label: 'Modal', path: '/modal' },
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