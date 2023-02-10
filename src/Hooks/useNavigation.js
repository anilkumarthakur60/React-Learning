import  {useContext} from "react";
import NavigationContext from "../Context/navigation";


function useNavigation() {
    return useContext(NavigationContext);
}

export  default useNavigation;