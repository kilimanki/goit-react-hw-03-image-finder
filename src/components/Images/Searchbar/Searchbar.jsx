import { Component } from 'react';
import css from 'Shared/styles.module.css';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
class Searchbar extends Component {
  state = {
    search: '',
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.search.trim()) {
      Notiflix.Notify.warning('Pls, type something');
      return;
    }
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });

    this.reset();
  };
  handleChange = e => {
    const { value } = e.target;
    this.setState({
      search: value,
    });
  };
  reset = () => {
    this.setState({ search: '' });
  };
  render() {
    const { search } = this.state;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={[css.button]}>
            Search
          </button>

          <input
            name="search"
            onChange={this.handleChange}
            value={search}
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
