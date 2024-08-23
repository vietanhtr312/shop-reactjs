import { memo } from "react";
import { Link } from "react-router-dom";
import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { categories } from "../../layouts/DefaultLayout/Category";
import { ROUTERS } from "../../utils/router";
import prodImg from "../../assets/images/product";
import ProductCard from "../../components/ProductCard";

const cx = classNames.bind(styles);

const Product = () => {
    const sorts = [
        "Mới nhất",
        "Bán chạy",
        "Giảm giá nhiều nhất",
        "Giá: Thấp đến cao",
        "Giá: Cao đến thấp"
    ]

    const products = [
        {
            img: prodImg.prod1,
            name: 'Hai Vạn Dặm Dưới Biển',
            price: 74.250,
        },
        {
            img: prodImg.prod2,
            name: 'Đám Trẻ Ở Đại Dương Đen',
            price: 61.380,
        },
        {
            img: prodImg.prod3,
            name: 'MBA Bằng Hình',
            price: 151.200,
        },
        {
            img: prodImg.prod4,
            name: 'Chiến Tranh Tiền Tệ',
            price: 169.000,
        },
        {
            img: prodImg.prod5,
            name: 'Sếp Ơi! Tại Sao Không Thăng Chức Cho Tôi?',
            price: 34.300,
        },
        {
            img: prodImg.prod6,
            name: 'Văn Hóa E-Mail: Xây Dựng Hình Ảnh Cá Nhân Qua E-Mail',
            price: 37.800,
        },
        {
            img: prodImg.prod7,
            name: 'Giải Thích Ngữ Pháp Tiếng Anh (Tái Bản 2024)',
            price: 143.000,
        },
        {
            img: prodImg.prod8,
            name: 'Destination B2 - Grammar And Vocabulary with Answer Key',
            price: 118.300,
        },
    ];



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
                                    <h2>Thể loại khác</h2>
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
                                        <ProductCard key={index} img={product.img} name={product.name} price={product.price} />
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

export default memo(Product);