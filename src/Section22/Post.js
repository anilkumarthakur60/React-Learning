import React from 'react';
import {GoTrashcan} from "react-icons/go";

import {useThunk} from "../Hooks/useThunk";
import {deleteUser} from "../store";
import Button from "../Component/Button";
import ExpandablePanel from "../Component/ExpandablePanel";
import {useCreateAlbumMutation} from "../store";

function Post(props) {
    const {post} = props;

    const [doDeleteUser, isLoadingUser, error] = useThunk(deleteUser);

    const [addAlbum,results] = useCreateAlbumMutation   ();


    const  handleAddAlbumb = () => {
        addAlbum(post);
        console.log('add album')
    }

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
            <Button  primary  onClick={handleAddAlbumb} >Add New Album</Button>
        </ExpandablePanel>

    );
}

export default Post;