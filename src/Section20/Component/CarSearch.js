import Button from "../../Component/Button";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeSearchTerm} from "../../store";

function CarSearch() {

    const [search, setSearch] = useState('');

    const searchStateData = useSelector((state) => {
        return state.cars.searchTerms;
    });

    const dispatch = useDispatch();

    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(changeSearchTerm(search));


    }

    const handleChanges = (e) => {
        setSearch(e.target.value)

        dispatch(changeSearchTerm(e.target.value));
    }

    return (
        <form onSubmit={formSubmit}>
            <div className="flex flex-row space-y-2 my-5">
                <input type="text"
                       className="px-2 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                       placeholder="Search Car..."
                       value={searchStateData}
                       name="name"
                       onChange={handleChanges}
                />
                <Button primary type="submit">Search</Button>
            </div>
        </form>
    )
}

export default CarSearch;