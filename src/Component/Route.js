// import { useContext } from 'react';
// import NavigationContext from "../Context/navigation";
import useNavigation from "../Hooks/useNavigation";

function Route({ path, children }) {
    // const { currentPath } = useContext(NavigationContext);
    const { currentPath } = useNavigation(); //commented line is replaced by this hook

    if (currentPath === path) {
        return children;
    }

    return null;
}

export default Route;