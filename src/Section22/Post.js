import React from 'react';
import {GoTrashcan} from "react-icons/go";

import {useThunk} from "../Hooks/useThunk";
import {deleteUser} from "../store";
import Button from "../Component/Button";
import ExpandablePanel from "../Component/ExpandablePanel";

function Post(props) {
    const {post} = props;

    const [doDeleteUser, isLoadingUser, error] = useThunk(deleteUser);

    const handleDeleteUser = () => {
        doDeleteUser(post.id);
    }

    const header=<>
        <Button loading={isLoadingUser} onClick={handleDeleteUser} className="mr-3">
            <GoTrashcan/>
        </Button>
        {
            error && <div>{error}</div>
        }
        {post.name}

    </>

    return (
        <ExpandablePanel header={header} post={post}>
            <Button  primary >Add New Album</Button>
        </ExpandablePanel>

    );
}

export default Post;