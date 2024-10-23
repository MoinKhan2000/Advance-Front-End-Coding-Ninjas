import { useState } from "react";
import styles from "./albumsList.module.css";
import { AlbumForm } from "../albumForm/AlbumForm";
import Spinner from "react-spinner-material";

export const AlbumsList = ({ currentAlbum, albums, setCurrentAlbum, isLoading, addAlbum, error }) => {
  const [showAlbumForm, setShowAlbumForm] = useState(false);

  return (
    <div>
      <div className={styles.top}>
        <h3>Your Albums</h3>
        <button onClick={() => setShowAlbumForm(!showAlbumForm)}>
          {showAlbumForm ? "Cancel" : "Add Album"}
        </button>
      </div>

      {showAlbumForm && <AlbumForm addAlbum={addAlbum} />}

      {isLoading ? (
        <div className={styles.loader}>
          <Spinner color="#0077ff" />
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : albums.length === 0 ? (
        <p>No albums found. Create one!</p>
      ) : (
        <div className={styles.albumsList}>
          {albums.map((album) => (
            <div key={album} onClick={() => setCurrentAlbum(album)} className={styles.album}>
              <img src="./assets/photos.png" alt="Album Icon" />
              <span>{album}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
