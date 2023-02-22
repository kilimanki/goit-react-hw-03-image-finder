import { Component } from 'react';
import { ImageList } from './ImageGallery/ImageList';
import { imagesApi } from '../../services/imagesApi';
import Searchbar from './Searchbar/Searchbar';

import Modal from 'Shared/Modal/Modal';
import { LoadMore } from './Button/LoadMore';
import Notiflix from 'notiflix';
import { Spinner } from './Loader/spinner';
class Images extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
    showModal: false,
    url: '',
    totalHits: 0,
  };
  async getFetch() {
    try {
      const { page, search } = this.state;
      this.setState({ loading: true });
      const { data } = await imagesApi({ search, page });

      if (data.hits.length === 0) {
        Notiflix.Notify.info(
          'Sorry, we are didn`t find pictures by your request'
        );
      }

      this.setState(prevState => {
        return {
          loading: false,
          images: [...prevState.images, ...data.hits],
          totalHits: data.totalHits,
        };
      });
    } catch (response) {
      this.setState({ error: response.data.message || 'Cannot fetch posts' });
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidUpdate(_, prevState) {
    const { page, search } = this.state;
    if (prevState.page !== page || prevState.search !== search) {
      this.getFetch();
    }
  }
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  onSubmit = ({ search }) => {
    this.setState({
      search,
      page: 1,
      images: [],
    });
  };
  openModal = url => {
    this.setState({
      showModal: true,
      url,
    });
  };
  closeModal = () => {
    this.setState({
      showModal: false,
      url: '',
    });
  };
  render() {
    const { images, loading, error, showModal, url } = this.state;

    return (
      <>
        {showModal && (
          <Modal close={this.closeModal}>
            <img src={url} alt="" />
          </Modal>
        )}

        <Searchbar onSubmit={this.onSubmit} />
        {loading && <Spinner />}

        {error && <p>{error}</p>}
        <ImageList images={images} onClick={this.openModal} />
        {Boolean(images.length) && images.length !== this.state.totalHits && (
          <LoadMore loadmore={this.loadMore} />
        )}
        {Boolean(images.length) &&
          images.length === this.state.totalHits &&
          Notiflix.Notify.success('The end')}
      </>
    );
  }
}
export default Images;
