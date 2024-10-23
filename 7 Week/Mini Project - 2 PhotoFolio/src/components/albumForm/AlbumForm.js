import { useState } from "react";
import styles from "./albumForm.module.css";

export const AlbumForm = ({ addAlbum }) => {
  const [albumName, setAlbumName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (albumName.trim()) {
      addAlbum(albumName.trim());
      setAlbumName("");
    }
    setLoading(false);
  };

  const handleClear = () => {
    setAlbumName("");
  };

  return (
    <div className={styles.albumForm}>
      <span>Create an album</span>
      <form onSubmit={handleSubmit}>
        <input required placeholder="Album Name" onChange={(e) => { setAlbumName(e.target.value) }} />
        <button type="button" onClick={handleClear} disabled={loading}>
          Clear
        </button>
        <button disabled={loading}>Create</button>
      </form>
    </div>
  );
};
