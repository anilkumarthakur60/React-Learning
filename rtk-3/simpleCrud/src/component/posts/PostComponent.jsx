
import { useDeletePostMutation, useFetchPostsQuery } from "../../redux/post/postApi.js";
import { useTableColumn } from "../../hooks/useTableColumn.jsx";
import useStore, { storeName } from "../../hooks/useStore.js";
import ListComponent from "../../component/frontend/crud/ListComponent.jsx";
import { useSelector } from "react-redux";
import PostCreate from "./PostCreate.jsx";

function PostComponent() {

    const [deletePost] = useDeletePostMutation()

    const { pagination, filters } = useStore(storeName.posts)
    const { data, error, refetch, status, isUninitialized, isLoading, isSuccess, isError, } = useFetchPostsQuery({ pagination, filters }, {
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    })


    const handleDelete = (val) => {
        deletePost({ id: val.id })
        refetch()
    }
    const { postsColumn, subHeaderComponent } = useTableColumn({
        handleDelete: handleDelete,
        refetch: refetch
    })


    return (<div className="">


        {data?.data &&
            <ListComponent
                data={data}
                error={error}
                refetch={refetch}
                status={status}
                isUninitialized={isUninitialized}
                isLoading={isLoading}
                isSuccess={isSuccess}
                isError={isError}
                columns={postsColumn}
                storeName={storeName.posts}
                subHeaderComponent={subHeaderComponent}
            />
        }

        <PostCreate />
    </div>
    )
}

export default PostComponent