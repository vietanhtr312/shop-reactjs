import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import bannerImg from "../../assets/images/banner";

import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductList from "../../components/ProductList";
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from "../../store/productSlice";
import { fetchAsyncCategories, getAllCategories } from "../../store/categorySlice";
import { STATUS } from "../../utils/status";

const cx = classNames.bind(styles);

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncProducts(10));
    }, []);

    const products = useSelector(getAllProducts);
    const productStatus = useSelector(getAllProductsStatus);

    useEffect(() => {
        dispatch(fetchAsyncCategories());
    }, []);

    const categories = useSelector(getAllCategories);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    let catProductOne = products.filter((product) => product.category === "Văn học");
    let catProductTwo = products.filter((product) => product.category === "Kinh tế");
    let catProductThree = products.filter((product) => product.category === "Tâm lý");
    let catProductFour = products.filter((product) => product.category === "Ngoại ngữ");


    return (
        <div className="grid wide">
            <div className={cx('slider-wrapper')}>
                <div className={cx('slider')}>
                    <Carousel responsive={responsive}>
                        {categories.map((item, index) => {
                            return (
                                <Link to={`/products/category/${item?.title}`} className={cx('slider-item')} key={index}>
                                    <img src={item?.images} alt={item?.title} />
                                    <p>{item?.title}</p>
                                </Link>
                            )
                        })}
                    </Carousel>
                </div>
            </div>

            <div className={cx('featured-wrapper')}>
                <div className={cx('featured')}>
                    <div className={cx('section-title')}>
                        <h2>Sản phẩm nổi bật</h2>
                        <div>
                            <div className={cx('categories-item')}>
                                <h3>Sách Văn Học</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? 'Loading...' : <ProductList data={catProductOne} />}
                        </div>
                        <div>
                            <div className={cx('categories-item')}>
                                <h3>Sách Kinh Tế</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? 'Loading...' : <ProductList data={catProductTwo} />}
                        </div>
                        <div>
                            <div className={cx('categories-item')}>
                                <h3>Sách Tâm Lý</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? 'Loading...' : <ProductList data={catProductThree} />}
                        </div>
                        <div>
                            <div className={cx('categories-item')}>
                                <h3>Sách Ngoại Ngữ</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? 'Loading...' : <ProductList data={catProductFour} />}
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx("banner-wrapper")}>
                <div className={cx("banner")}>
                    <div className="row">
                        <div className={cx("banner-pic col l-6 m-6 c-12")}>
                            <img src={bannerImg.banner1} alt="Banner" />
                        </div>
                        <div className={cx("banner-pic col l-6 m-6 c-12")}>
                            <img src={bannerImg.banner2} alt="Banner" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;