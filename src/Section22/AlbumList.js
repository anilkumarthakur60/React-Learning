function AlbumList({albums, children, ...rest}) {
    return (
        <div>
            {
                albums.map((album, i) => {
                    return <div key={album.id} className={`mb-2 border rounded`}>
                        <div className={`flex p-2 justify-between items-center cursor-pointer`}>
                            <div className="flex flex-row justify-between items-center">
                                {album.name}
                                <div className="">

                                    {
                                        album.media.map((image) => {

                                            return <img src={image.path} alt={image.title}
                                                        className={`h-10 w-10 `}/>

                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

    export default AlbumList