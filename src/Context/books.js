import  {createContext,useState} from "react";

const BookContext = createContext();

function Provider(props) {

    const [count, setCount] = useState(0);

    const valueToShare = {
        count:count,
        incrementCount: () => {
            setCount(count + 1);
        }


    }

    return (
        <BookContext.Provider value={valueToShare}>
            {props.children}
        </BookContext.Provider>
    )
}


export {Provider};
export default BookContext;