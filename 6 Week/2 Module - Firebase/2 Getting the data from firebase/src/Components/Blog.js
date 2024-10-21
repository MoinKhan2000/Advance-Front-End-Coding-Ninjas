import { useRef, useEffect, useState } from "react";
import db from '../firebaseinit'
import { collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";


export default function Blog() {

    const [blogs, setBlogs] = useState([]);
    const [data, setData] = useState({ title: "", content: "" });
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const titleRef = useRef(null)
    // console.log(db);


    const getAllTheDocs = async () => {
        const snapshot = await getDocs(collection(db, "blogs"));
        const blogs = snapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })

        setBlogs(blogs);
    }

    useEffect(() => {

        // console.log("Component loaded");
        getAllTheDocs()
        titleRef.current.focus();

    }, []);

    useEffect(() => {
        if (blogs.length > 0) {
            document.title = blogs[0].title
        }
    }, [blogs])

    async function addBlog(title, content) {
        if (title.trim() && content.trim()) {

            //?  Adding the data to the database.
            /*  First way
                const res = await addDoc(collection(db, "blogs"), { title, content, createdAt: new Date() });
            */

            /*
                const docRef = doc(collection(db, "blogs"));
                const res = await addDoc(docRef, { title, content, createdAt: new Date() });
            */


            /*
                ? When to use `addDoc`:
                    - `addDoc()` automatically generates a random document ID in a collection.
                    - It’s best when you don't need control over the document ID and just want to add data quickly.
                    Example:
                    const res = await addDoc(collection(db, "blogs"), { title, content, createdAt: new Date() });

                ? When to use `setDoc`:
                    - `setDoc()` is used when you want to specify the document ID explicitly.
                    - If the document with the given ID already exists, it will be overwritten with the new data.
                    - `setDoc()` is useful when you need a specific document ID (e.g., for predictable URLs or updates).
            */

            const docRef = doc(collection(db, "blogs"));
            const res = await setDoc(docRef, { title, content, createdAt: new Date() })
            console.log("Blog added successfully! & Blog Id is ", res.id);
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
