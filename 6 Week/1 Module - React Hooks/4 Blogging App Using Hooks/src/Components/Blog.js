import { useRef, useEffect, useState } from "react";

export default function Blog() {

    const [blogs, setBlogs] = useState([]);
    const [data, setData] = useState({ title: "", content: "" });
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const titleRef = useRef(null)

    useEffect(() => {
        console.log("Component loaded");
        titleRef.current.focus();
    }, []);

    useEffect(() => {
        if (blogs.length > 0) {
            document.title = blogs[0].title
        }
    }, [blogs])

    function addBlog(title, content) {
        if (title.trim() && content.trim()) {
            const newBlog = { id: Date.now(), title, content };
            setBlogs([newBlog, ...blogs]);
            setData({ title: "", content: "" });
            titleRef.current.focus();
        } else {
            alert(`Title and Content Must Not Bet Empty`)
        }
    }

    function removeBlog(id) {
        setBlogs(blogs.filter(blog => blog.id !== id));
    }

    function editBlog(id) {
        const blogToEdit = blogs.find(blog => blog.id === id);
        setData({ title: blogToEdit.title, content: blogToEdit.content });
        setEditId(id);
        setEditMode(true);
    }

    function saveUpdatedBlog() {
        setBlogs(blogs.map(blog => blog.id === editId ? { ...blog, title: data.title, content: data.content } : blog));
        setEditMode(false);
        setData({ title: "", content: "" });
        setEditId(null);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (editMode) {
            saveUpdatedBlog();
        } else {
            addBlog(data.title, data.content);
        }
    }

    function handleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    return (
        <>
            {/* Heading of the page */}
            <h1>Write a Blog!</h1>
            {/* Division created to provide styling of section to the form */}
            <div className="section">
                {/* Form to write the blog */}
                <form onSubmit={handleSubmit}>
                    {/* Row component for first input field */}
                    <Row label="Title">
                        <input
                            ref={titleRef}
                            className="input"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                            placeholder="Enter the Title of the Blog here.." />
                    </Row >
                    {/* Row component for Text area field */}
                    <Row label="Content">
                        <textarea
                            className="input content"
                            name="content"
                            value={data.content}
                            rows={5}
                            onChange={handleChange}
                            placeholder="Content of the Blog goes here.." />
                    </Row >
                    {/* Button to submit the blog */}
                    <button className="btn">{editMode ? "Save" : "Add"}</button>
                </form>
            </div>
            <hr />

            <h2> Blogs </h2>

            <div className="blog-section">
                {blogs.length === 0 ? (
                    <p>No blogs available. Add a new blog to get started!</p>
                ) : (
                    blogs.map(blog => (
                        <div key={blog.id} className="blog-item">
                            <h3>{blog.title}</h3>
                            <p>{blog.content}</p>
                            <div className="blog-btns">
                                <button className="btn edit-btn" onClick={() => editBlog(blog.id)}>Edit</button>
                                <button className="btn remove-btn" onClick={() => removeBlog(blog.id)}>Remove</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </>
    );
}

function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    );
}
