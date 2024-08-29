import { generatePath, Link } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './ProductCard.module.scss';
import { formatPrice } from "../../utils/fomarter";

const cx = classNames.bind(styles);

const ProductCard = ({product}) => {
    return (
        <Link to = {`product/${product?.id}`} key = {product?.id}>
            <div className={cx('featured-item')}>
                <div className={cx('featured-item-pic')}
                    style={{ backgroundImage: `url(${product?.images})` }}>
                    <ul>
                        <li><i className="fa-regular fa-eye"></i></li>
                        <li><i className="fa-solid fa-cart-shopping"></i></li>
                    </ul>
                </div>
                <div className={cx('featured-item-text')}>
                    <h6>{product?.title}</h6>
                    <h5>{formatPrice(product?.price)}</h5>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;