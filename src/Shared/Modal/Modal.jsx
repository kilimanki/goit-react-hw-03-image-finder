import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from '../styles.module.css';
const modalRoot = document.getElementById('modal-root');
class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.pressedKey);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressedKey);
  }
  pressedKey = ({ code, target, currentTarget }) => {
    if (target === currentTarget || code === 'Escape') {
      const { close } = this.props;
      close();
    }
  };
  render() {
    const { children } = this.props;
    return createPortal(
      <div className={css.Overlay} onClick={this.pressedKey}>
        <div className={css.modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
