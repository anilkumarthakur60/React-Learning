import {useFetchAlbumsQuery, useFetchAllAlbumsQuery} from "../store";
import Loading from "../Component/Loading";
import ExpandablePanel from "../Component/ExpandablePanel";
import Button from "../Component/Button";

function AlbumList({post, children, ...rest}) {
    const {data, error, isLoading} = useFetchAlbumsQuery(post);


    let content;
    if (isLoading) {
        content = <Loading times={2} className={`h-10 w-full`}/>
    } else if (error) {
        content = <div>{error}</div>

    } else {
        content = data.data.map((album, i) => {


            const header = <div>{album?.name} </div>

            return <ExpandablePanel key={album?.id} header={header}>
                List of photos in this album
            </ExpandablePanel>

        })
    }


    return (
        <div>
            {content}
        </div>
    );
}

export default AlbumList