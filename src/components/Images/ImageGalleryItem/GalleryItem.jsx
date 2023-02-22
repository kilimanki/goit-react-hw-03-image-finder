import css from 'Shared/styles.module.css';
import PropTypes from 'prop-types';
export const GalleryItem = ({ webformatURL, click, largeImageURL }) => {
  return (
    <li onClick={() => click(largeImageURL)} className={css.ImageGalleryItem}>
      <img src={webformatURL} alt="" className={css.ImageGalleryItemImage} />
    </li>
  );
};
GalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
