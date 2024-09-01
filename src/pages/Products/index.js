import { memo } from "react";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../utils/router";
import styles from './Products.module.scss';
import classNames from 'classnames/bind';
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from "../../store/productSlice";
import { fetchAsyncCategories, getAllCategories } from "../../store/categorySlice";
import { useEffect } from "react";

const cx = classNames.bind(styles);

const Products = () => {
    const sorts = [
        "Mới nhất",
        "Bán chạy",
        "Giảm giá nhiều nhất",
        "Giá: Thấp đến cao",
        "Giá: Cao đến thấp"
    ]

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAsyncProducts());
    }, []);

    const products = useSelector(getAllProducts);

    useEffect(() => {
        dispatch(fetchAsyncCategories());
    }, []);

    const categories = useSelector(getAllCategories);


    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-3', 'm-12', 'c-12')}>
                            <div className={cx('sidebar')}>
                                <div className={cx('sidebar-item')}>
                                    <h2>Tìm kiếm</h2>
                                    <input type="text" placeholder="Tìm kiếm" />
                                </div>
                                <div className={cx('sidebar-item')}>
                                    <h2>Mức giá</h2>
                                    <div className={cx('price')}>
                                        <div>
                                            <p>Từ: </p>
                                            <input type='number' min={0} />
                                        </div>
                                        <div>
                                            <p>Đến: </p>
                                            <input type='number' min={0} />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('sidebar-item')}>
                                    <h2>Sắp xếp</h2>
                                    <div className={cx('tags')}>
                                        {sorts.map((sort, index) => (
                                            <div className={cx('tag', `${index === 0 ? "active" : ""}`)} key={index}>
                                                {sort}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={cx('sidebar-item')}>
                                    <h2>Thể loại</h2>
                                    <ul>
                                        {categories.map((category, index) => (
                                            <li key={index}>
                                                <Link to={ROUTERS.USER.PRODUCTS}>{category}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col', 'l-9', 'm-12', 'c-12')}>
                            <div className="row">
                                {products.map((product, index) => (
                                    <div className="col l-4 m-4 c-12">
                                        <ProductCard product={product}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Products);