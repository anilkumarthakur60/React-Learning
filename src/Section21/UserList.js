import {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchUsers} from "../store";

function UserList() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchUsers())
    },[dispatch])


    const {data,isLoading,error}=useSelector((state)=>state.users);

        if (isLoading) {
            return <div>Loading...</div>
        } else if (error) {
            return <div>{error}</div>
        }else if (data){
            return data.map((user, i) => {
                        return (
                            <li key={user.id}>{i + 1}. {user.name}</li>
                        )
                    })
        }



}

export default UserList;