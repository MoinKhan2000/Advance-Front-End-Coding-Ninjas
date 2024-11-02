import { posts } from "./data";
import { usePostContext } from "./postContext";

export const List = () => {
  const { savedPosts, toggleSavePost } = usePostContext();

  return (
    <div className="list">
      {posts.map((p) => {
        const isSaved = savedPosts.some((savedPost) => savedPost.id === p.id);

        return (
          <div className="post" key={p.id}>
            <h3>{p.text}</h3>
            <img src={p.img} alt={p.text} />
            {/* Conditional Save/Delete button */}
            {isSaved ? (
              // Delete icon for unsaving
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" // Example delete icon
                alt="delete"
                onClick={() => toggleSavePost(p)}
                className="delete-icon"
              />
            ) : (
              // Save icon for saving
              <img
                src="https://cdn-icons-png.flaticon.com/512/102/102279.png" // Save icon
                alt="save"
                onClick={() => toggleSavePost(p)}
                className="save-icon"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
