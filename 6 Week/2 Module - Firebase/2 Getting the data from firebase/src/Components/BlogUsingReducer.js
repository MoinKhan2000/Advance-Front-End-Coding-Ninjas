import { useRef, useEffect, useState, useReducer } from "react";

export default function BlogUsingReducer() {

  const blogsReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [action.blog, ...state]

      case "REMOVE":
        return state.filter(blog => blog.id !== action.id)

      case "UPDATE":
        return state.map(blog => blog.id === action.id ? { ...blog, title: action.updatedBlog.title, content: action.updatedBlog.content } : blog);

      default:
        return state
    }
  }

  const [blogs, dispatch] = useReducer(blogsReducer, [])

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

      // setBlogs([newBlog, ...blogs]);
      dispatch({ type: "ADD", blog: newBlog })

      setData({ title: "", content: "" });
      titleRef.current.focus();
    } else {
      alert(`Title and Content Must Not Bet Empty`)
    }
  }

  function removeBlog(id) {
    // setBlogs(blogs.filter(blog => blog.id !== id));
    dispatch({ type: "REMOVE", id: id })
  }

  function editBlog(id) {
    const blogToEdit = blogs.find(blog => blog.id === id);
    setData({ title: blogToEdit.title, content: blogToEdit.content });
    setEditId(id);
    setEditMode(true);
  }

  function saveUpdatedBlog() {
    // setBlogs(blogs.map(blog => blog.id === editId ? { ...blog, title: data.title, content: data.content } : blog));
    const updatedBlog = { title: data.title, content: data.content }
    dispatch({ type: "UPDATE", id: editId, updatedBlog })
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
      <h1>Write a Blog!</h1>
      <div className="section">
        <form onSubmit={handleSubmit}>
          <Row label="Title">
            <input
              ref={titleRef}
              className="input"
              name="title"
              value={data.title}
              onChange={handleChange}
              placeholder="Enter the Title of the Blog here.." />
          </Row >
          <Row label="Content">
            <textarea
              className="input content"
              name="content"
              value={data.content}
              rows={5}
              onChange={handleChange}
              placeholder="Content of the Blog goes here.." />
          </Row >
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
