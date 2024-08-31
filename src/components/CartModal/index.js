import styles from './CartModal.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from "../../utils/formarter";
import imgs from '../../assets/images/hero';
import { ROUTERS } from '../../utils/router';

const cx = classNames.bind(styles);

const CartModal = ({ carts }) => {
    console.log(carts);
    return (
        <div className={cx('cart-modal')}>
            {(carts?.length > 0) ? (
                <div>
                    <h5>Giỏ hàng của bạn</h5>
                    <div className={cx('cart-modal-list')}>
                        {carts.map(cart => {
                            return (
                                <div key={cart?.id}>
                                    <div className={cx('cart-modal-item')}>
                                        <div className={cx('item-img')}>
                                            <img src={cart?.images} alt={cart.title} />
                                        </div>
                                        <div className={cx('item-info')}>
                                            <h6>{cart?.title}</h6>
                                            <span className={cx("item-price")}>{formatPrice(cart?.price)}</span>
                                            <span className={cx("item-multiply")}>x</span>
                                            <span className={cx("item-qty")}>{cart?.quantity}</span>
                                        </div>
                                    </div>
                                </div>)
                        })}
                        <Link to={ROUTERS.USER.CART} className={cx('view-cart-btn')}>
                            <button className={cx('btn', 'btn--primary')}>Xem giỏ hàng</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className={cx("cart-modal-empty")}>
                    <img src={imgs.emptyCart} alt='empty cart' />
                    <span>Chưa có sản phẩm</span>
                </div>
            )
            }
        </div>
    );
}

export default CartModal;
