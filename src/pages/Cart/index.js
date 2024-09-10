import style from './Cart.module.scss';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCart, removeFromCart, toggleCartQty, clearCart } from '../../store/cartSlice';
import { ROUTERS } from '../../utils/router';
import imgs from '../../assets/images/hero';
import { formatPrice } from '../../utils/formarter';
import Header from '../../layouts/CompactHeader/Header';



const cx = classNames.bind(style);

function Cart() {
    const dispatch = useDispatch();
    const carts = useSelector(getAllCart);
    const { itemsCount, totalAmount } = useSelector(state => state.cart);

    if (carts.length === 0) {
        return (
            <div>
                <Header name={"Giỏ hàng"} />
                <div className={cx('cartpage--empty')}>
                    <img src={imgs.emptyCart} alt='empty cart' />
                    <h4>Your cart is empty</h4>
                    <Link to={ROUTERS.USER.PRODUCTS} className={cx('btn', 'btn--primary')}>Go to Products</Link>
                </div>
            </div>
        )}

    return (
        <div>
            <Header name={"Giỏ hàng"} />
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
                                <div className={cx('cartpage-table')}>
                                    <table>
                                        <tbody>
                                            {carts.map((cart, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td><img src={cart?.images} alt="" /></td>
                                                        <td><p>{cart?.title}</p></td>
                                                        <td className={cx('price')}><p>{formatPrice(cart?.price)}</p></td>
                                                        <td><span className={cx('qty-change')}>
                                                            <button onClick={() => dispatch(toggleCartQty({ id: cart?.id, type: "DEC" }))}>
                                                                <i className="fas fa-minus"></i>
                                                            </button>
                                                            <span>{cart.quantity}</span>
                                                            <button onClick={() => dispatch(toggleCartQty({ id: cart?.id, type: "INC" }))}>
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </span></td>
                                                        <td className={cx('price')}><p>{formatPrice(cart?.total)}</p></td>
                                                        <td className={cx('action')}><button onClick={() => dispatch(removeFromCart(cart?.id))}><i className="fas fa-trash-alt"></i></button></td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className={cx('cartpage-foot', 'row')}>
                                <div className={cx('cartpage-clear', 'col')}>
                                    <button className='btn' onClick={() => dispatch(clearCart())}>
                                        <i className="fas fa-trash-alt"></i>
                                        <span>Xóa giỏ hàng</span>
                                    </button>
                                </div>

                                <div className={cx('cartpage-total', 'col c-5')}>
                                    <p>Tổng cộng ({itemsCount}) sản phẩm: <span>{formatPrice(totalAmount)}</span></p>
                                    <button className={cx('cartpage-btn')}>
                                        <Link to={ROUTERS.USER.CHECKOUT} className={cx('btn', 'btn--primary')}>Thanh toán</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )

}

export default Cart;