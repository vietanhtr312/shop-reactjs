import style from './Cart.module.scss';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCart, removeFromCart, toggleCartQty } from '../../store/cartSlice';
import { ROUTERS } from '../../utils/router';
import imgs from '../../assets/images/hero';
import { formatPrice } from '../../utils/formarter';



const cx = classNames.bind(style);

function Cart() {
    const dispatch = useDispatch();
    const carts = useSelector(getAllCart);
    const { itemsCount, totalAmount } = useSelector(state => state.cart);

    if (carts.length === 0) {
        return (<div className={style.emptyCart}>
            <img src={imgs.emptyCart} alt='empty cart' />
            <h2>Your cart is empty</h2>
            <Link to={ROUTERS.USER.PRODUCTS} className={cx('btn', 'btn--primary')}>Go to Products</Link>
        </div>)
    }

    return (
        <div className={cx('cartpage')}>
            <div className={cx("grid wide")}>
                <div className={cx("container")}>
                    <div className={cx("cartpage-head")}>
                        <table className={cx('cartpage-table')}>
                            <tr>
                                <th>STT</th>
                                <th>Sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá sản phẩm</th>
                                <th>SL</th>
                                <th>Thành tiền</th>
                                <th>Xóa</th>
                            </tr>
                        </table>
                        <div className={cx('cartpage-body')}>
                            {carts.map((cart, index) => {
                                return (
                                    <div className={cx('cartpage-table')} key={index}>
                                        <table>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td><img src={cart?.images} alt="" /></td>
                                                <td><p>{cart?.title}</p></td>
                                                <td><p>{formatPrice(cart?.price)}</p></td>
                                                <td><span className={cx('qty-change')}>
                                                    <button onClick={() => dispatch(toggleCartQty({ id: cart?.id, type: "DEC" }))}>
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                    <span>{cart.quantity}</span>
                                                    <button onClick={() => dispatch(toggleCartQty({ id: cart?.id, type: "INC" }))}>
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </span></td>
                                                <td><p>{formatPrice(cart?.total)}</p></td>
                                                <td><button onClick={() => dispatch(removeFromCart(cart?.id))}><i className="fas fa-trash-alt"></i></button></td>
                                            </tr>
                                        </table>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Cart;