import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, getDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import db from './firebaseInit';
import { v4 as uuidv4 } from "uuid"; // For generating unique image IDs

// Fetch albums
export const getAlbums = async () => {
  const albumsSnapshot = await getDocs(collection(db, "albums"));
  return albumsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Add a new album
export const addAlbum = async (albumName) => {
  const albumRef = await addDoc(collection(db, "albums"), { name: albumName });
  return { id: albumRef.id, name: albumName };
};

// Fetch images in an album
export const getImages = async (albumId) => {
  try {
    // Get a reference to the album document
    const albumRef = doc(db, "albums", albumId);

    // Fetch the album document
    const albumSnapshot = await getDoc(albumRef);

    // Check if the album exists
    if (albumSnapshot.exists()) {
      // Retrieve the imagesInfo array from the document data
      const albumData = albumSnapshot.data();
      const imagesInfo = albumData.imagesInfo || [];
      return imagesInfo;
    } else {
      return [];
    }

  } catch (error) {
    console.error("Error fetching images: ", error);
    throw new Error("Failed to fetch images.");
  }
};

// Add a new image to the album
export const addImage = async (albumId, imageData) => {
  try {
    console.log("albumId-> ", albumId);
    console.log("image->", imageData);

    const albumRef = doc(db, "albums", albumId);

    // Generate a unique ID for the image
    const newImage = {
      id: uuidv4(),  // Unique ID for each image
      title: imageData.title,
      url: imageData.url,
      timestamp: new Date(),
    };

    // Add the new image to the imagesInfo array
    await updateDoc(albumRef, {
      imagesInfo: arrayUnion(newImage),
    });

    return newImage;
  } catch (error) {
    console.error("Error adding image: ", error);
    throw new Error("Failed to add image.");
  }
};

// Update an image in the album
export const updateImage = async (albumId, updatedImage) => {
  try {
    const albumRef = doc(db, "albums", albumId);

    // Fetch the current album document
    const albumSnap = await getDoc(albumRef);
    if (!albumSnap.exists()) {
      throw new Error("Album not found");
    }

    // Get the current images in the album
    const albumData = albumSnap.data();
    const { imagesInfo } = albumData;

    // Find the image to update
    const imageIndex = imagesInfo.findIndex(image => image.id === updatedImage.id);
    if (imageIndex !== -1) {
      const updatedImages = [...imagesInfo];
      updatedImages[imageIndex] = { ...updatedImage, timestamp: new Date() };

      // Update the imagesInfo array with the updated image
      await updateDoc(albumRef, {
        imagesInfo: updatedImages,
      });
      return updatedImage;
    } else {
      throw new Error("Image not found");
    }
  } catch (error) {
    console.error("Error updating image: ", error);
    throw new Error("Failed to update image.");
  }
};

// Delete an image from the album
export const deleteImage = async (albumId, imageId) => {
  try {
    console.log("deleteImage firebase albumId-> ", albumId);
    console.log("deleteImage firebase imageId-> ", imageId);

    const albumRef = doc(db, "albums", albumId);

    // Fetch the current album document
    const albumSnap = await getDoc(albumRef);
    if (!albumSnap.exists()) {
      throw new Error("Album not found");
    }

    // Get the current images in the album
    const albumData = albumSnap.data();
    const { imagesInfo } = albumData;

    // Find the image to delete based on imageId
    const imageToRemove = imagesInfo.find(image => image.id === imageId);

    if (imageToRemove) {
      // Remove the image from the imagesInfo array
      await updateDoc(albumRef, {
        imagesInfo: arrayRemove(imageToRemove),
      });
      return imageToRemove;
    } else {
      throw new Error("Image not found in album");
    }
  } catch (error) {
    console.error("Error deleting image: ", error);
    throw new Error("Failed to delete image.");
  }
};
