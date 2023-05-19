
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { createBlog, readBlog, updateBlog, deleteBlog } from '../../redux/blog/blogSlice';

function BlogPage() {



    // const dispatch = useDispatch();
    // const { data, loading, error } = useSelector((state) => state.blogs);
    // const [formData, setFormData] = useState({
    //     title: '',
    //     content: '',
    // });

    // // Fetch blogs on component mount
    // useEffect(() => {
    //     dispatch(readBlog());
    // }, [dispatch]);

    // // Create
    // const handleCreate = () => {
    //     dispatch(createBlog(formData));
    //     setFormData({ title: '', content: '' });
    // };

    // // Read
    // const handleRead = (blogId) => {
    //     dispatch(readBlog(blogId));
    // };

    // // Update
    // const handleUpdate = (blogId) => {
    //     dispatch(updateBlog({ id: blogId, ...formData }));
    //     setFormData({ title: '', content: '' });
    // };

    // // Delete
    // const handleDelete = (blogId) => {
    //     dispatch(deleteBlog(blogId));
    // };

    // // Handle form input change
    // const handleInputChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
    return (
        <div>
            {/* <form>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Content"
                />
                <button type="button" onClick={handleCreate}>
                    Create
                </button>
            </form>

            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((blog) => (
                            <tr key={blog.id}>
                                <td>{blog.title}</td>
                                <td>{blog.content}</td>
                                <td>
                                    <button onClick={() => handleRead(blog.id)}>Read</button>
                                    <button onClick={() => handleUpdate(blog.id)}>Update</button>
                                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )} */}
        </div>
    )
}

export default BlogPage