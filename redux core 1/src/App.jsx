import {useEffect, useState,useCallback,useRef,useMemo} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "./redux/slice/postsSlice.js";
import { debounce } from "lodash";


function App() {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState({});
    const { data } = useSelector((state) => state.posts);
    const debouncedFilters = useRef(debounce((filters) =>
        dispatch(fetchPosts(filters)), 500)).current;

    useEffect(() => {
        debouncedFilters(filters);
    }, [filters, debouncedFilters]);

    const handleFilters = ({ target }) => {
        const { name, value } = target;
        setFilters((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const memoizedData = useMemo(() => data, [data]);

    return (
        <div className="row">
            <div className="form-floating mb-3">
                <input
                    type="email"
                    name="queryFilter"
                    value={filters.queryFilter ?? ''}
                    onChange={handleFilters}
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="row bg-dark rounded-4">
                {memoizedData.map((item, index) => (
                    <div className="col-lg-2 col-md-4 col-sm-6 col-12 g-4" key={index}>
                        <div className="card rounded-4">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <a href="#" className="btn btn-primary">
                                    Read More →
                                </a>
                            </div>
                            <div className="card-footer text-muted">
                                Posted on {item.created_at} by John Doe
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App
