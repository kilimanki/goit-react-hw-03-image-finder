import css from 'Shared/styles.module.css';
import PropTypes from 'prop-types';
export const LoadMore = ({ loadmore }) => {
  return (
    <button onClick={loadmore} className={css.Button}>
      Load more
    </button>
  );
};
LoadMore.propTypes = {
  loadmore: PropTypes.func.isRequired,
};
