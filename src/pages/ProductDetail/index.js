import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncProductSingle, getProductSingle, getSingleProductStatus } from "../../store/productSlice";
import { STATUS } from "../../utils/status";

import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';
import { formatPrice } from "../../utils/formarter";
import { addToCart, setCartMessageOff, setCartMessageOn, getCartMessageStatus } from "../../store/cartSlice";
import CartMessage from "../../components/CartMessage";

const cx = classNames.bind(styles);

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getProductSingle);
    const productSingleStatus = useSelector(getSingleProductStatus);
    const [quantity, setQuantity] = useState(1);
    const imgs = product ? product.images : [];
    const cartMessageStatus = useSelector(getCartMessageStatus);

    useEffect(() => {
        dispatch(fetchAsyncProductSingle(id));

        if (cartMessageStatus) {
            setTimeout(() => {
                dispatch(setCartMessageOff());
            }, 2000);
        }
    }, [cartMessageStatus]);

    if (productSingleStatus === STATUS.LOADING) {
        return <div>Loading...</div>
    }

    const increaseQty = () => {
        setQuantity((prevQty) => {
            let temp = prevQty + 1;
            if (temp > product?.stock)
                temp = product?.stock;
            return temp;
        })
    }

    const decreaseQty = () => {
        setQuantity((prevQty) => {
            let temp = prevQty - 1;
            if (temp < 1)
                temp = 1;
            return temp;
        })
    }

    const addToCartHandler = (product) => {
        let total = product.price * quantity;

        dispatch(addToCart({...product, quantity: quantity, total: total}));
        dispatch(setCartMessageOn(true));
    }


    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-6')}>
                            <div className={cx('product-detail-pic')}>
                                <div className={cx('img')}>
                                    <img src={product ? (product.images ? product.images : "") : ""} alt="product" />
                                </div>
                                <div className={cx('main')}>
                                    {/* {imgs.length() > 1 ? imgs.map((img, index) => (
                                        <img key={index} src={img} alt="product-pic" />
                                    )) : ""} */}
                                </div>
                            </div>
                        </div>
                        <div className={cx('col l-6', 'product-detail-text')}>
                            <div className={cx('title')}>{product?.title}</div>
                            <div className={cx('info', 'row')}>
                                <div className="col l-6">Danh mục: <span>{product?.category}</span></div>
                                <div className="col l-6">Tác giả: <span>{product?.author}</span></div>
                                <div className="col l-6">NXB: <span>{product?.publisher}</span></div>
                                <div className="col l-6">Rating: <span>{product?.rating}</span></div>
                            </div>
                            <p>{product?.description}</p>
                            <div className={cx('price')}>Giá: <span>{formatPrice(product?.price)}</span></div>
                            <div className={cx('quantity')}>
                                <div className={cx('text')}>Số lượng:</div>
                                <div className={cx('btn')}>
                                    <button onClick={() => decreaseQty()}>
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <div className={cx("qty")}>{quantity}</div>
                                    <button onClick={() => increaseQty()}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            {
                                product?.stock === 0 ? (<div className={cx('no-stock')}>Hết hàng</div>) : ("")
                            }
                            <div className={cx('btn-buy')}>
                                <button className="btn btn--primary" onClick={() => {
                                    addToCartHandler(product);
                                }}>
                                    <i className="fas fa-cart-plus"></i>
                                    Thêm vào giỏ hàng
                                </button>
                                <button className="btn">Mua ngay</button>
                            </div>
                            <ul>
                                <li>
                                    <span>Chia sẻ: </span><span>
                                        <i className="fab fa-facebook"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-google-plus"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {cartMessageStatus ? <CartMessage message="Đã thêm vào giỏ hàng" /> : ""}
        </div>
    )
}

export default ProductDetail;