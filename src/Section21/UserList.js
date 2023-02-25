import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers, addUsers} from "../store";
import Loading from "../Component/Loading";
import Button from "../Component/Button";

function UserList() {
    const dispatch = useDispatch();

    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [loadingUsersError, setLoadingUsersError] = useState(null);

    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const [creatingUserError, setCreatingUserError] = useState(null);


    useEffect(() => {
        setIsLoadingUsers(true);
        dispatch(fetchUsers())
            .unwrap()
            .catch((error) => setLoadingUsersError(error.message))
            .finally(() => setIsLoadingUsers(false));
    }, [dispatch])


    const {data} = useSelector((state) => state.users);

    if (isLoadingUsers) {
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
        setIsCreatingUser(true);
        dispatch(addUsers({name: "New User"}))
            .unwrap()
            .catch((error) => setCreatingUserError(error.message))
            .finally(() => setIsCreatingUser(false));
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