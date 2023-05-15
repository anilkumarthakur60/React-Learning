import { TextField, makeStyles } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovie } from '../redux/feature/movieSlice'


const Search = () => {

    const dispatch = useDispatch();
    const store = useSelector((state) => state.movies)
    const [search, setSearch] = useState('spider')

    useEffect(() => {

        dispatch(getMovie(search));
    }, [dispatch, search])


    return (<>
        <h2>Movie Search</h2>
        <form onSubmit={(e) => { e.preventDefault() }}>
            <TextField
                type='text'
                fullWidth
                value={search}
                sx={{ m: 1, width: "55cc" }}
                onInput={
                    (e) => {
                        setSearch(e.target.value)


                    }
                }
            ></TextField>
        </form>

    </>)
}

export default Search