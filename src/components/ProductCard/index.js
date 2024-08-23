import { Link } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './ProductCard.module.scss';

const cx = classNames.bind(styles);

const ProductCard = ({img, name, price}) => {
    return (
        <div className={cx('featured-item')}>
            <div className={cx('featured-item-pic')}
                style={{ backgroundImage: `url(${img})` }}>
                <ul>
                    <li><i className="fa-regular fa-eye"></i></li>
                    <li><i className="fa-solid fa-cart-shopping"></i></li>
                </ul>
            </div>
            <div className={cx('featured-item-text')}>
                <h6>
                    <Link to="/product">{name}</Link>
                </h6>
                <h5>{price}<sup>đ</sup></h5>
            </div>
        </div>
    );
}

export default ProductCard;