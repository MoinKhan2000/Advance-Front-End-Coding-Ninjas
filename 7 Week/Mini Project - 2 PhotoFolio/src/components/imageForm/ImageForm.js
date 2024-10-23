import { useState, useEffect } from "react";
import styles from "./imageForm.module.css";

export const ImageForm = ({
  onSubmit,        // Function to add a new image
  onUpdate,        // Function to update an existing image
  updateIntent,    // Image details when updating an image
  currentAlbum,    // Current album where the image belongs
  loading          // Loading state to disable the form when the request is processing
}) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  // Pre-fill the form fields when updating an image
  useEffect(() => {
    if (updateIntent) {
      // If we are updating, fill the form with existing image data
      setTitle(updateIntent.title);
      setUrl(updateIntent.url);
    } else {
      // Clear fields if it's in add mode
      setTitle("");
      setUrl("");
    }
  }, [updateIntent]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (updateIntent) {
      // If updateIntent exists, we are updating an existing image
      console.log("updating the image ... ");

      await onUpdate(currentAlbum, { ...updateIntent, title, url });
    } else {
      // Otherwise, we are adding a new image
      await onSubmit(currentAlbum, { title, url });
    }

    // Clear the form fields after submission
    handleClear();
  };

  // Clear the form fields
  const handleClear = () => {
    setTitle("");
    setUrl("");
  };

  return (
    <div className={styles.imageForm}>
      <span>
        {!updateIntent
          ? `Add image to ${currentAlbum}`
          : `Update image ${updateIntent.title}`}
      </span>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />
        <input
          required
          type="url"
          value={url}
          placeholder="Image URL"
          onChange={(e) => setUrl(e.target.value)}
          disabled={loading}
        />
        <div className={styles.actions}>
          <button type="button" onClick={handleClear} disabled={loading}>
            Clear
          </button>
          <button type="submit" disabled={loading}>
            {!updateIntent ? "Add" : "Update"}   {/* Change button text based on mode */}
          </button>
        </div>
      </form>
    </div>
  );
};
