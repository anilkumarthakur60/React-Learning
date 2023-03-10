import {createContext, useEffect, useState} from "react";
const NavigationContext = createContext();
function NavigationProvider({children}) {

    const  [currentPath, setCurrentPath] = useState(window.location.pathname);

    const  arrayData = useState([
        {id: 1, name: "John"},
        {id: 2, name: "Mary"},
        {id: 3, name: "Peter"}
    ]);



    useEffect(
        () => {
            const  handler = () => {
                setCurrentPath(window.location.pathname);
            };
            window.addEventListener('popstate', handler);
            return () => {
                window.removeEventListener('popstate', handler);
            }

        },[currentPath]

    )


    const  navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }


    return (
        <NavigationContext.Provider value={{currentPath,navigate}}>
            {children}
        </NavigationContext.Provider>
    )
}

export  {NavigationProvider};

export default NavigationContext;