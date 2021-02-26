import { FunctionComponent } from "react";
import Gallery from "react-grid-gallery";
import IMAGES from "./Images";
import "../css/bookpicks.css";

const BookPics: FunctionComponent = () => {
  return (
    <div className="galleryContainer">
      <div className="gallery">
        <Gallery images={IMAGES} enableImageSelection={false} />
      </div>
    </div>
  );
};

export default BookPics;
