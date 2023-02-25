import React from 'react';
import {GoTrashcan} from "react-icons/go";

import {useThunk} from "../Hooks/useThunk";
import {deleteUser} from "../store";
import Button from "../Component/Button";
import ExpandablePanel from "../Component/ExpandablePanel";

function UserListItem(props) {
    const {user} = props;

    const [doDeleteUser, isLoadingUser, error] = useThunk(deleteUser);

    const handleDeleteUser = () => {
        doDeleteUser(user.id);
    }

    const header=<>
        <Button loading={isLoadingUser} onClick={handleDeleteUser} className="mr-3">
            <GoTrashcan/>
        </Button>
        {
            error && <div>{error}</div>
        }
        {user.name}

    </>

    return (
        <ExpandablePanel header={header} post={user}>
            Content
        </ExpandablePanel>
        // <div className={`mb-2 border rounded`}>
        //     <div className={`flex p-2 justify-between items-center cursor-pointer`}>
        //         <div className="flex flex-row justify-between items-center">
        //
        //             <Button loading={isLoadingUser} onClick={handleDeleteUser} className="mr-3">
        //                  <GoTrashcan/>
        //             </Button>
        //             {
        //                 error && <div>{error}</div>
        //             }
        //
        //             {user.name}
        //         </div>
        //
        //     </div>
        // </div>
    );
}

export default UserListItem;