import styles from "./imageList.module.css";
import { useState, useRef, useEffect } from "react";
import Spinner from "react-spinner-material";
import { ImageForm } from "../imageForm/ImageForm";
import { Carousel } from "../carousel/Carousel";
import { toast } from "react-toastify"; // Import toast from react-toastify

export const ImagesList = ({ currentAlbum, getImages, addImage, updateImage, deleteImage, onBack }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchIntent, setSearchIntent] = useState(false);
  const searchInput = useRef();
  const [addImageIntent, setAddImageIntent] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const [updateImageIntent, setUpdateImageIntent] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [activeHoverImageIndex, setActiveHoverImageIndex] = useState(null);

  // Next Image Carousel handler
  const handleNext = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous Image Carousel handler
  const handlePrev = () => {
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Cancel Image Carousel or Form
  const handleCancel = () => {
    setActiveImageIndex(null);
    setAddImageIntent(false);
    setUpdateImageIntent(false);
  };

  // Search handler toggle
  const handleSearchClick = () => {
    setSearchIntent((prevState) => !prevState);
    if (searchIntent) searchInput.current.value = "";
  };

  // Perform search based on input value
  const handleSearch = async () => {
    const searchTerm = searchInput.current.value.toLowerCase();
    if (searchTerm) {
      const filteredImages = images.filter((img) =>
        img.title.toLowerCase().includes(searchTerm)
      );
      setImages(filteredImages);
    } else {
      const data = await getImages(); // Reset the images list if search is cleared
      setImages(data);
    }
  };

  // Add image handler
  const handleAdd = async (albumId, imageData) => {
    setImgLoading(true);
    try {
      const newImage = await addImage(albumId, imageData);
      setImages([newImage, ...images]);
      toast.success("Image added successfully"); // Success toast on add
      await fetchImages();
    } catch (error) {
      toast.error("Failed to add image"); // Error toast on failure
      console.error("Failed to add image:", error);
    }
    setImgLoading(false);
    setAddImageIntent(false);
  };

  // Update image handler
  const handleUpdate = async (albumId, imageData) => {
    try {
      const updatedImage = await updateImage(albumId, imageData);
      setImages((prevImages) =>
        prevImages.map((img) => (img.id === updatedImage.id ? updatedImage : img))
      );
      toast.success("Image updated successfully"); // Success toast on update
      setUpdateImageIntent(false);
      await fetchImages();
    } catch (error) {
      toast.error("Failed to update image"); // Error toast on failure
      console.error("Failed to update image:", error);
    }
  };

  // Delete image handler
  const handleDelete = async (imageId, e) => {
    e.stopPropagation();
    try {
      await deleteImage(currentAlbum, imageId);
      setImages(images.filter((img) => img.id !== imageId));
      toast.success("Image deleted successfully"); // Success toast on delete
      await fetchImages();
    } catch (error) {
      toast.error("Failed to delete image"); // Error toast on failure
      console.error("Failed to delete image:", error);
    }
  };

  // Fetch images from the album
  const fetchImages = async () => {
    setLoading(true);
    try {
      const data = await getImages(currentAlbum);
      setImages(data);
    } catch (error) {
      toast.error("Failed to fetch images"); // Toast error if fetching fails
      console.error("Failed to fetch images:", error);
    }
    setLoading(false);
  };

  // Fetch images when component loads or currentAlbum changes
  useEffect(() => {
    fetchImages();
  }, [currentAlbum, getImages]);

  if (!images.length && !searchInput.current?.value && !loading) {
    return (
      <>
        <div className={styles.top}>
          <span onClick={onBack}>
            <img src="/assets/back.png" alt="back" />
          </span>
          <h3>No images found in the album.</h3>
          <button
            className={`${addImageIntent && styles.active}`}
            onClick={() => setAddImageIntent(!addImageIntent)}
          >
            {!addImageIntent ? "Add image" : "Cancel"}
          </button>
        </div>
        {addImageIntent && (
          <ImageForm
            loading={imgLoading}
            onSubmit={handleAdd}
            currentAlbum={currentAlbum}
          />
        )}
      </>
    );
  }

  return (
    <>
      {(addImageIntent || updateImageIntent) && (
        <ImageForm
          loading={imgLoading}
          onSubmit={handleAdd}
          currentAlbum={currentAlbum}
          onUpdate={handleUpdate}
          updateIntent={updateImageIntent}
        />
      )}
      {(activeImageIndex || activeImageIndex === 0) && (
        <Carousel
          title={images[activeImageIndex].title}
          url={images[activeImageIndex].url}
          onNext={handleNext}
          onPrev={handlePrev}
          onCancel={handleCancel}
        />
      )}
      <div className={styles.top}>
        <span onClick={onBack}>
          <img src="/assets/back.png" alt="back" />
        </span>
        <h3>Images in {currentAlbum}</h3>

        <div className={styles.search}>
          {searchIntent && (
            <input
              placeholder="Search..."
              onChange={handleSearch}
              ref={searchInput}
              autoFocus={true}
            />
          )}
          <img
            onClick={handleSearchClick}
            src={!searchIntent ? "/assets/search.png" : "/assets/clear.png"}
            alt="search"
          />
        </div>

        <button
          className={`${addImageIntent && styles.active}`}
          onClick={() => setAddImageIntent(!addImageIntent)}
        >
          {!addImageIntent ? "Add image" : "Cancel"}
        </button>
      </div>

      {loading ? (
        <div className={styles.loader}>
          <Spinner color="#0077ff" />
        </div>
      ) : (
        <div className={styles.imageList}>
          {images.map((image, i) => (
            <div
              key={i}
              className={styles.image}
              onMouseOver={() => setActiveHoverImageIndex(i)}
              onMouseOut={() => setActiveHoverImageIndex(null)}
              onClick={() => setActiveImageIndex(i)}
            >
              <div
                className={`${styles.update} ${activeHoverImageIndex === i && styles.active}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setUpdateImageIntent(image);
                }}
              >
                <img src="/assets/edit.png" alt="edit" />
              </div>
              <div
                className={`${styles.delete} ${activeHoverImageIndex === i && styles.active}`}
                onClick={(e) => handleDelete(image.id, e)}
              >
                <img src="/assets/trash-bin.png" alt="delete" />
              </div>
              <img
                src={image.url}
                alt={image.title}
                onError={({ currentTarget }) => {
                  currentTarget.src = "/assets/warning.png";
                }}
              />
              <span>{image.title.substring(0, 20)}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
