import {useEffect, useState,useCallback} from "react";
import { useSelector} from "react-redux";
import {fetchUsers, addUsers} from "../store";
import Loading from "../Component/Loading";
import Button from "../Component/Button";
import {useThunk} from "../Hooks/useThunk";

import Post from "./Post";



function PostList() {
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
        content=data.map((post, i) => {
            return <Post key={post.id} post={post}/>
        })
    }



    const renderAddUser = () => {
        if (isCreatingUser) {
            return <Loading times={2} className={`h-10 w-full`}/>
        } else {
            return <Button primary onClick={handleAddUser}>
                Add Post
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
                Posts
            </h1>
            <Button loading={isCreatingUser} primary onClick={handleAddUser}>
                Add Post
            </Button>
            {
                creatingUserError && 'Error Creating User'
            }
        </div>

        {content}
    </div>


}

export default PostList;