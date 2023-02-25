
import React from 'react';
import {GoTrashcan} from "react-icons/go";

import  {useThunk} from "../Hooks/useThunk";
import {deleteUser} from "../store";
import Button from "../Component/Button";

function UserListItem(props) {
    const {user} = props;

    const [doDeleteUser, isLoadingUser,error] = useThunk(deleteUser);

    const handleDeleteUser = () => {
        doDeleteUser(user.id);
    }

    return (
        <div  className={`mb-2 border rounded`}>
            <div className={`flex p-2 justify-between items-center cursor-pointer`}>
                <Button loading={isLoadingUser}  onClick={handleDeleteUser}>
                    {
                    isLoadingUser? <GoTrashcan className={`animate-spin`}/>:<GoTrashcan />
                    }

                </Button>
                {
                    error && <div>{error}</div>
                }

                {user.name}

            </div>
        </div>
    );
}

export default UserListItem;