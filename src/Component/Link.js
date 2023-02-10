// import { useContext } from 'react';
// import NavigationContext from "../Context/navigation";

import useNavigation from "../Hooks/useNavigation";
import classNames from "classnames";

function Link({ to, children,className,activeClassName,...rest }) {
    // const { navigate } = useContext(NavigationContext);
    const { navigate ,currentPath} = useNavigation();
    const handleClick = (event) => {
        if (event.metaKey|| event.ctrlKey) {
            return;
        }
        event.preventDefault();

        navigate(to);
    };

    const classes = classNames('text-blue-500 hover:text-blue-700 cursor-pointer text-sm font-semibold my-2 mr-4 ml-4 btn btn-sm btn-outline-primary',
        className,
        currentPath === to && activeClassName,

    );

    return <a {...rest} className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;