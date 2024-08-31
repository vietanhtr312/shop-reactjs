import style from './CartMessage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const CartMessage = ({ message }) => {
  return (
    <div className={cx("cart-message")}>
        <div className={cx("icon")}>
            <i className="fas fa-check"></i>
        </div>
        <h6>{message}</h6>
    </div>
  );
}

export default CartMessage;