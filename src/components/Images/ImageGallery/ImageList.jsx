import { GalleryItem } from '../ImageGalleryItem/GalleryItem';
import css from '../../../Shared/styles.module.css';
import PropTypes from 'prop-types';
export const ImageList = ({ images, onClick }) => {
  const elements = images.map(item => {
    return <GalleryItem key={item.id} {...item} click={onClick} />;
  });
  return <ul className={css.ImageGallery}>{elements}</ul>;
};
ImageList.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
