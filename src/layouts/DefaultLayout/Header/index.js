import { Link } from 'react-router-dom';
import { ROUTERS } from '../../../utils/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images/hero';
import { getAllCart, getCartTotal } from '../../../store/cartSlice';
import { getAllCategories } from '../../../store/categorySlice';
import CartModal from '../../../components/CartModal';
import { formatPrice } from '../../../utils/formarter';

const cx = classNames.bind(styles);

function Header(...props) {
    const dispatch = useDispatch();
    const carts = useSelector(getAllCart);
    const { itemsCount, totalAmount } = useSelector(state => state.cart);
    const categories = useSelector(getAllCategories);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTerm = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        dispatch(getCartTotal());
    }, [carts]);

    const [isShowHamburger, setIsShowHamburger] = useState(false);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('hamburger-menu-overlay', `${isShowHamburger ? 'active' : ''}`)}
                onClick={() => setIsShowHamburger(false)}>
            </div>

            <div className={cx('hamburger-menu-wrapper', `${isShowHamburger ? 'show' : ''}`)}>
                <div className={cx('hamberger-logo')}>
                    <h2>SHOPPY</h2>
                </div>
                <div className={cx('hamburger-menu-cart')}>
                    <ul>
                        <li>
                            <Link to="">
                                <i className={cx('fa-solid fa-cart-shopping')}><span>{itemsCount}</span></i>
                            </Link>
                        </li>
                    </ul>
                    <Link to={ROUTERS.USER.CART} className={cx('cart-price')}>Giỏ hàng: <span>{formatPrice(totalAmount)}</span></Link>
                </div>
                <div className={cx("hamburger-menu-widget")}>
                    <div className={cx("auth")}>
                        <Link to=""><i className="fa-regular fa-user"></i> Đăng nhập</Link>
                    </div>
                </div>
                <div className={cx("hamburger-menu-nav")}>
                    <ul>
                        {categories && categories?.map((category, index) => (
                            <li key={index}>
                                <Link to={`/products/category/${category?.title}`}>Sách {category?.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx("hamburger-menu-social")}>
                    <Link to="">
                        <i className={cx("fa-brands fa-facebook")}></i>
                    </Link>
                    <Link to="">
                        <i className={cx("fa-brands fa-instagram")}></i>
                    </Link>
                    <Link to="">
                        <i className={cx("fa-brands fa-twitter")}></i>
                    </Link>
                </div>
                <div className={cx('hamburger-menu-contact')}>
                    <ul>
                        <li><i className={cx('fa-solid fa-envelope')}></i> vietanhtr923@gmail.com</li>
                        <li>Miễn phí đơn hàng từ 200.000<sup>đ</sup></li>
                    </ul>
                </div>
            </div>

            <div className={cx("grid wide")}>
                <nav className={cx("navbar")}>
                    <ul className={cx("nav__list")}>
                        <li className={cx("nav__item", "nav__item--has-qr", "nav__item--separate")}>
                            Vào cửa hàng trên điện thoại
                            <div className={cx("qr")}>
                                <img src={images.qrCode} alt="QR code" />
                                <div>
                                    <Link to="" ><img src={images.ggPlay} alt="GG Play" /></Link>
                                    <Link to=""><img src={images.appStore} alt="App Store" /></Link>
                                </div>
                            </div>
                        </li>
                        <li className={cx("nav__item")}>
                            <span className={cx("nav__item--no-pointer")}>Kết nối</span>
                            <Link to="" className={cx("nav__icon-link")}>
                                <i className={cx("fa-brands fa-facebook")}></i>
                            </Link>
                            <Link to="" className={cx("nav__icon-link")}>
                                <i className={cx("fa-brands fa-instagram")}></i>
                            </Link>
                        </li>
                    </ul>

                    <ul className={cx("nav__list")}>
                        <li className={cx("nav__item", "nav__item--has-notify")}>
                            <Link to="" className={cx("nav__item-link")}>
                                <i className={cx("fa-regular fa-bell")}></i>
                                Thông báo
                            </Link>
                            <div className={cx("noti")}>
                                <header><h3>Thông báo mới nhận</h3></header>
                                <ul className={cx('noti-list')}>
                                </ul>
                                <footer><Link href="">Chưa có thông báo</Link></footer>
                            </div>
                        </li>
                        <li className={cx("nav__item")}>
                            <Link to="" className={cx("nav__item-link")}>
                                <i className={cx("fa-regular fa-circle-question")}></i>
                                Trợ giúp
                            </Link>
                        </li>

                        {/* <!-- <li className={cx()}"nav__item nav__item--separate">
                        <a href="" className={cx()}"nav__item--strong nav__item-link">Đăng ký</a>
                    </li>
                    <li className={cx()}"nav__item">
                        <a href="" className={cx()}"nav__item--strong nav__item-link">Đăng nhập</a>
                    </li> --> */}

                        <li className={cx("nav__item", "nav-user")}>
                            <img src="./asset/img/avatar.jpg" alt="" />
                            <span>Viet Anh</span>
                            <ul >
                                <li><Link to={ROUTERS.USER.HOME}>Tài khoản của tôi</Link></li>
                                <li><Link to="">Địa chỉ</Link></li>
                                <li><Link to="">Đơn mua</Link></li>
                                <li><Link to="">Đăng xuất</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div className={cx("search_wrap")}>
                    <div className='row' style={{ alignItems: 'center' }}>
                        <div className={cx("logo", "col l-2 m-4")}>
                            <Link to=""><img src={images.logo} alt="Logo" /></Link>
                        </div>

                        <div className='col l-8 m-6 c-0'>
                            <div className={cx("search")}>
                                <div className={cx("search-input-wrap")}>
                                    <input type="search" placeholder="Tìm kiếm sản phẩm" spellCheck={false} onChange={(e) => handleSearchTerm(e)}/>
                                </div>
                                <Link to= {`search/${searchTerm}`}><button><i className={cx("fa-solid fa-magnifying-glass")}></i></button></Link>
                            </div>  
                        </div>

                        <div className={cx("cart", "col l-2 m-0 c-0")}>
                            <div className={cx("cart-wrap")}>
                                <Link to={ROUTERS.CART}>
                                    <i className={cx("fa-solid fa-cart-shopping")}></i>
                                    <span className={cx('cart-qty')}>{itemsCount}</span>
                                </Link>
                                <CartModal className={cx('cart-modal')} carts={carts} />
                            </div>
                        </div>

                        <div className={cx('categories')}>
                            <ul>
                                {categories && categories?.map((category, index) => (
                                    <li key={index}>
                                        <Link to={`/products/category/${category?.title}`}>Sách {category?.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={cx('hamburger-open', 'col l-0 m-o-1 m-1 c-o-5 c-1')}>
                            <i className={cx('fa-solid fa-bars')} onClick={() => {
                                setIsShowHamburger(true);
                            }}></i>
                        </div>

                        <div style={{ marginTop: 10 }} className={cx("search", "col l-0 m-0 c-12")}>
                            <div className={cx("search-input-wrap")}>
                                <input type="search" placeholder="Tìm kiếm sản phẩm" spellCheck={false} onChange={(e) => handleSearchTerm(e)}/>
                            </div>
                            <Link to={`search/${searchTerm}`}><button><i className={cx("fa-solid fa-magnifying-glass")}></i></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>);
}

export default Header;