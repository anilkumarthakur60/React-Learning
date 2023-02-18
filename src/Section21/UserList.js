import {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchUsers,addUsers} from "../store";
import Loading from "../Component/Loading";

function UserList() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(addUsers())
    },[dispatch])


    const {data,isLoading,error}=useSelector((state)=>state.users);

        if (isLoading) {
            return (
              <Loading times={2} className={`h-10 w-full`} />
            )
        } if (error) {
            return <div>{error}</div>
        }


        const renderUserList = data.map((user, i) => {
            return <div key={user.id} className={`mb-2 border rounded`}>
                <div className={`flex p-2 justify-between items-center cursor-pointer`}> {user.name}</div>
            </div>
        })

    return  <div >
        {renderUserList}
    </div>



}

export default UserList;