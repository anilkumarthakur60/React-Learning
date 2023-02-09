import { useContext } from 'react';
import NavigationContext from "../Context/navigation";

function Link({ to, children }) {
    const { navigate } = useContext(NavigationContext);

    const handleClick = (event) => {
        event.preventDefault();

        navigate(to);
    };

    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return <a onClick={handleClick}>{children}</a>;
}

export default Link;