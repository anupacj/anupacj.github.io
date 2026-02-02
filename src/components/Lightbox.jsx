import { useEffect } from "react";

const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!image) {
    return null;
  }

  return (
    <div className="lightbox" onClick={onClose} role="presentation">
      <div className="lightbox__inner" onClick={(event) => event.stopPropagation()}>
        <img src={image.src} alt={image.title} />
        <div className="lightbox__meta">
          <h3>{image.title}</h3>
          <p>{image.caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
