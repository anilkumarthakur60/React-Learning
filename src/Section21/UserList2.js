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

    if (isLoadingUser) {
        return (
            <Loading times={2} className={`h-10 w-full`}/>
        )
    }
    if (loadingUsersError) {
        return <div>{loadingUsersError}</div>
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


    const renderUserList = data.map((user, i) => {
        return <div key={user.id} className={`mb-2 border rounded`}>
            <div className={`flex p-2 justify-between items-center cursor-pointer`}> {user.name}</div>
        </div>
    })


    return <div>
        <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">
                Users
            </h1>

            {
                isCreatingUser ? <Loading times={2} className={`h-10 w-full`}/> :
                    <Button primary onClick={handleAddUser}>
                        Add User
                    </Button>
            }
            {
                creatingUserError && 'Error Creating User'
            }
        </div>
        {renderUserList}
    </div>


}

export default UserList;