import ReactModal from "react-modal";
// import { IoCloseCircle } from "react-icons/io5";
import style from "./ImageModal.module.css";

export const ImageModal = ({
  isOpen,
  closeModal,
  imageUrl,
  alt_decsription,
  description,
  author,
  likes,
}) => {
  ReactModal.setAppElement("#root");
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={description}
      onRequestClose={closeModal}
      className={style.modal}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgb(109, 105, 114, 0.85)",
        },
        content: {
          position: "absolute",
          top: "80px",
          left: "80px",
          right: "80px",
          bottom: "80px",
          background: "transparent",
          overflow: "hidden",
          WebkitOverflowScrolling: "touch",
          outline: "none",
          padding: "20px",
          width: "1000px",
          height: "600px",
        },
      }}
    >
      {/* <button className={style.closeBtn} onClick={closeModal}>
        <IoCloseCircle />
      </button> */}
      {imageUrl && (
        <img className={style.imgModal} src={imageUrl} alt={alt_decsription} />
      )}
      <div className={style.imgInfo}>
        <p className={style.modalText}>Author: {author}</p>
        <p className={style.modalText}>Likes: {likes}</p>
      </div>
    </ReactModal>
  );
};
