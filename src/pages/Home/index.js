import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import categoryImg from '../../assets/images/category';
import prodImg from "../../assets/images/product";
import bannerImg from "../../assets/images/banner";
import ProductCard from "../../components/ProductCard";

import React, { useEffect} from "react";
import { useSelector ,useDispatch } from "react-redux";
import ProductList from "../../components/ProductList";
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from "../../store/productSlice";
import { STATUS } from "../../utils/status";

const cx = classNames.bind(styles);

function Home() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAsyncProducts(10));
    }, []);

    const products = useSelector(getAllProducts);
    const productStatus = useSelector(getAllProductsStatus);
    // console.log(products);


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

    const sliderItems = [
        {
            img: categoryImg.cat1,
            title: 'Văn học'
        },
        {
            img: categoryImg.cat2,
            title: 'Tâm lý học'
        },
        {
            img: categoryImg.cat3,
            title: 'Ngoại ngữ'
        },
        {
            img: categoryImg.cat4,
            title: 'Kinh tế'
        },
        {
            img: categoryImg.cat5,
            title: 'Thiếu nhi'
        }
    ];

    const featuredItems = {
        all: {
            title: 'Tất cả',
            products: [
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
            ],
        },

        literature: {
            title: 'Văn học',
            products: [
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
            ],
        },
        economic: {
            title: 'Kinh tế',
            products: [
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
            ],
        },
        mentality: {
            title: 'Tâm lý',
            products: [
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
            ],
        },
        forein: {
            title: 'Ngoại ngữ',
            products: [
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
            ],
        },
    };

    const renderFeaturedItems = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title} </Tab>)

            const tabPanel = [];
            data[key].products.forEach((item, j) => {

                tabPanel.push(
                <div className="col l-3 m-4 c-6" key={j}>
                    <ProductCard img={item.img} name={item.name} price={item.price}/>
                </div>)
            })

            tabPanels.push(tabPanel);
        });


        return (
            <div>
                <Tabs>
                    <TabList>{tabList}</TabList>

                    <div>
                        {tabPanels.map((item, index) => (
                            <TabPanel className={cx('react-tabs__tab-panel')} key={index}>
                                {item}
                            </TabPanel>
                        ))}
                    </div>
                </Tabs>
            </div>
        );
    }

    let catProductOne = products.filter((product) => product.category === "literature");
    let catProductTwo = products.filter((product) => product.category === "business");
    let catProductThree = products.filter((product) => product.category === "mental");
    let catProductFour = products.filter((product) => product.category === "language");

    // console.log(catProductOne);

    return (
        <div className="grid wide">
            <div className={cx('slider-wrapper')}>
                <div className={cx('slider')}>
                    <Carousel responsive={responsive}>
                        {
                            sliderItems.map((item, index) => {
                                return (
                                    <div className={cx('slider-item')} key={index}>
                                        <img src={item.img} alt={item.title} />
                                        <p>{item.title}</p>
                                    </div>
                                );
                            })
                        }
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