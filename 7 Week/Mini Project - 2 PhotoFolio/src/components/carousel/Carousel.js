import styles from "./carousel.module.css";

export const Carousel = ({ onNext, onPrev, onCancel, url, title }) => {
  return (
    <div className={styles.carousel}>
      <button onClick={onCancel} className={styles.close}>x</button>
      <button onClick={onPrev} className={styles.prev}>{"<"}</button>
      <div className={styles.imageWrapper}>
        <img src={url} alt={title} />
      </div>
      <button onClick={onNext} className={styles.next}>{">"}</button>
    </div>
  );
};
