import { Button, Container } from "@mui/material";
import { useState } from "react";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [image, setimage] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("profile");
    return saved || "";
  });
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      const file = e.target.files[0];
      getBase64(file).then(base64 => {
        localStorage["profile"] = base64;
        console.debug("file stored",base64);
      });
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const updateSelectedImage = () => {
    imageChange()
  };
  const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  }
  return (
    <Container>
      <div style={styles.container}>
        <h1>Upload a photo of yourself</h1>
        <Button>
        <input
          accept="image/*"
          type="file"
         
          onChange={imageChange}
        />
        </Button>

        {selectedImage && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
            
          </div>
        )}
        <Button onClick={updateSelectedImage} style={styles.update}>
              Update
        </Button>
      </div>
    </Container>
  );
};

export default Upload;

// Just some styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
   
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 220 },
  update: {
    cursor: "pointer",
    padding: 5,
    background: "black",
    color: "white",
    border: "none",
    marginTop:"50px"
  },
};