import {useEffect, useState,useCallback} from "react";
import { useSelector} from "react-redux";
import {fetchUsers, addUsers} from "../store";
import Loading from "../Component/Loading";
import Button from "../Component/Button";
import {useThunk} from "../Hooks/useThunk";



function UserList() {
    const [doFetchUsers, isLoadingUser,loadingUsersError] = useThunk(fetchUsers);
    const [doAddUser, isCreatingUser,creatingUserError] = useThunk(addUsers);


    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers])


    const {data} = useSelector((state) => state.users);


    let content;
    if (isLoadingUser) {
       content=<Loading times={2} className={`h-10 w-full`}/>
    }else if (loadingUsersError) {
        content=<div>{loadingUsersError}</div>
    }
    else{
        content=data.map((user, i) => {
            return <div key={user.id} className={`mb-2 border rounded`}>
                <div className={`flex p-2 justify-between items-center cursor-pointer`}> {user.name}</div>
            </div>
        })
    }



    const renderAddUser = () => {
        if (isCreatingUser) {
            return <Loading times={2} className={`h-10 w-full`}/>
        } else {
            return <Button primary onClick={handleAddUser}>
                Add User
            </Button>
        }
        if (creatingUserError) {
            return <div>{creatingUserError}</div>
        }
    }

    const handleAddUser = () => {
        doAddUser();
    }



    return <div>
        <div className="flex flex-row justify-between items-center m-3">
            <h1 className="m-2 text-xl">
                Users
            </h1>
            <Button loading={isCreatingUser} primary onClick={handleAddUser}>
                Add User
            </Button>
            {
                creatingUserError && 'Error Creating User'
            }
        </div>

        {content}
    </div>


}

export default UserList;