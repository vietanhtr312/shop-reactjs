import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList";
import { fetchAsyncProductsOfCategory, getCategoryProductsStatus, getAllProductsByCategory } from "../../store/categorySlice";
import { STATUS } from "../../utils/status";
import styles from "./CategoryProduct.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CategoryProduct = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const categoryProducts = useSelector(getAllProductsByCategory);
    const categoryProductsStatus = useSelector(getCategoryProductsStatus);

    useEffect(() => {
        dispatch(fetchAsyncProductsOfCategory(category));
    }, [dispatch, category]);

    return (
        <div className={cx('cat-products')}>
            <div className={cx('grid wide')}>

                <div>
                    <div className={cx('cat-products-content')}>
                        <h3>Xem <span className={cx('')}>{category}</span></h3>
                    </div>

                    {categoryProductsStatus === STATUS.LOADING ? <div className={cx('loading')}>Loading...</div> :
                        <div className={cx("cat-products-list")}>
                            <ProductList data={categoryProducts} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default CategoryProduct;