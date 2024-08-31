import ProductCard from "../ProductCard";
import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';

const cx = classNames.bind(styles);

const ProductList = ({data}) => {
    return (
        <div className={cx('product-list', 'row')}>
            {
                data?.map((item, index) => {
                    return (
                        <div className={cx('product-item', 'col l-3 m-4 c-6')} key={index}>
                            <ProductCard product={item}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ProductList;