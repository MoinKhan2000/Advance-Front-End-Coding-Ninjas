import styles from "./App.module.css";
// components imports
import { Navbar } from "./components/navbar/Navbar";
import { AlbumsList } from "./components/albumsList/AlbumsList";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Toastify styles
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import db from "./firebaseInit";
import { useReducer, useState, useEffect } from "react";
import { ImagesList } from "./components/imagesList/ImagesList";
import { getImages, addImage, deleteImage, updateImage } from "./firebase";

function App() {
  const [albums, dispatch] = useReducer(reducer, { titles: [] });
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newImageDetails, setNewImageDetails] = useState(null);

  // Reducer function to manage albums state
  function reducer(state, action) {
    let { payload } = action;
    switch (action.type) {
      case "ADD":
        return { titles: [payload.data, ...state.titles] };
      case "GET":
        payload.setIsLoading(false);
        return { titles: payload.albums };
      default:
        return state;
    }
  }

  // useEffect to fetch albums on component mount
  useEffect(() => {
    onSnapshot(collection(db, "albums"), (snapshot) => {
      const albums = snapshot.docs.map((doc) => {
        return doc.id;
      });
      dispatch({ type: "GET", payload: { albums, setIsLoading } });
    });
  }, []);

  // Function to add a new album
  const addAlbum = (data) => {
    for (let album of albums.titles) {
      if (data === album) {
        toast.error(`Album "${album}" already exists`); // Display error toast
        return;
      }
    }

    async function setData() {
      try {
        await setDoc(doc(db, "albums", data), { imagesInfo: [] });
        // dispatch({ type: "ADD", payload: { data } }); //? We are using onSnapshot method don't need to dispatch. 
        toast.success(`Album "${data}" added successfully`); // Success toast
      } catch (error) {
        toast.error("Failed to add album"); // Error toast
      }
    }

    setData();
  };

  const onBack = () => {
    setCurrentAlbum(null);
  };

  return (
    <div className={styles.App}>
      <ToastContainer /> {/* Toast container to render all toasts */}
      <Navbar />
      <div className={styles.content}>
        {currentAlbum ? (
          <ImagesList
            currentAlbum={currentAlbum}
            setCurrentAlbum={setCurrentAlbum}
            newimageDetails={newImageDetails}
            setNewimageDetails={setNewImageDetails}
            addImage={addImage}
            getImages={getImages}
            deleteImage={deleteImage}
            updateImage={updateImage}
            onBack={onBack}
          />
        ) : (
          <AlbumsList
            setCurrentAlbum={setCurrentAlbum}
            albums={albums.titles}
            isLoading={isLoading}
            addAlbum={addAlbum}
          />
        )}
      </div>
    </div>
  );
}

export default App;
