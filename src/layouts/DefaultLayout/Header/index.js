import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../assets/images';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { ROUTERS } from '../../../utils/router';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {

    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCT,
        },
        {
            name: "Sản phẩm",
            path: ROUTERS.USER.PRODUCT,
            isShowSubmenu: true,
            child: [
                {
                    name: "Sản phẩm 1",
                    path: ROUTERS.USER.PRODUCT,
                },
                {
                    name: "Sản phẩm 2",
                    path: ROUTERS.USER.PRODUCT,
                }
            ]
        },
        {
            name: "Liên hệ",
            path: ROUTERS.USER.CONTACT,
        },
        {
            name: "Bài viết",
            path: ROUTERS.USER.BLOG,
        }
    ]);



    return (
        <header className={cx('wrapper')}>
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
                    <div className={cx("logo")}>
                        <Link to=""><img src={images.logo} alt="Logo" /></Link>
                    </div>

                    <div className={cx("search")}>
                        <Tippy
                            render={attrs => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <h3>Kết quả sản phẩm</h3>
                                    <ul>
                                        <li>123 </li>
                                    </ul>
                                </div>
                            )}
                        >
                            <div className={cx("search-input-wrap")}>
                                <input type="search" placeholder="Tìm kiếm sản phẩm" spellCheck={false} />
                            </div>
                        </Tippy>
                        <button>
                            <i className={cx("fa-solid fa-magnifying-glass")}></i>
                        </button>

                    </div>

                    <div className={cx("cart")}>
                        <div className={cx("cart-wrap")}>
                            <i className={cx("fa-solid fa-cart-shopping")}></i>
                            <div>
                                <div className={cx('cart--no-product')}>
                                    <img src={images.emptyCart} alt="" />
                                    <span>Chưa Có Sản Phẩm</span>
                                </div>
                                {/* <h4 className={cx("cart-heading")}>Sản phẩm đã thêm</h4>
                                <ul className={cx("cart-list-item")}>
                                    <li className={cx("cart-item")}>
                                    </li>
                                </ul> */}

                                {/* <a href="./cart.html" className={cx("btn cart-view-cart btn--primary")}>Xem giỏ hàng</a> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('menu-wrapper')}>
                    <div className={cx('menu')}>
                        <ul>
                            {menus?.map((menu, index) => (
                                <li key={index} className={index === 0 ? cx("active") : ""}>
                                    <Link to={menu?.path}>{menu?.name}</Link>
                                    {menu.child && (
                                        <ul className={cx('menu-dropdown')}>
                                            {menu.child.map((childItem, index) => (
                                                <li>
                                                    <Link to={childItem?.path}>{childItem?.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={cx('contact')}>
                    </div>
                </div>
            </div>
        </header>);
}

export default Header;