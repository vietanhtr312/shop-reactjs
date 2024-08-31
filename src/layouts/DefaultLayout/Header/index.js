import { Link } from 'react-router-dom';
import { ROUTERS } from '../../../utils/router';
import { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images/hero';

const cx = classNames.bind(styles);

function Header(...props) {

    const [isShowHamburger, setIsShowHamburger] = useState(false);

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
                                <i className={cx('fa-solid fa-cart-shopping')}><span>1</span></i>
                            </Link>
                        </li>
                    </ul>
                    <div className={cx('cart-price')}>Giỏ hàng: <span>1.000.000<sup>đ</sup></span></div>
                </div>
                <div className={cx("hamburger-menu-widget")}>
                    <div className={cx("auth")}>
                        <Link to=""><i className="fa-regular fa-user"></i> Đăng nhập</Link>
                    </div>
                </div>
                <div className={cx("hamburger-menu-nav")}>
                    <ul>
                        {menus.map((menu, index) => (
                            <li key={index}>
                                <Link to={menu.path} onClick={() => {
                                    const newMenus = [...menus];
                                    newMenus[index].isShowSubmenu = !newMenus[index].isShowSubmenu;
                                    setMenus(newMenus);
                                }
                                }>
                                    {menu.name}
                                    {menu.child && (
                                        menu.isShowSubmenu ? (<i className="fa-regular fa-circle-down"></i>)
                                            : (<i className="fa-regular fa-circle-up"></i>)
                                    )}
                                </Link>
                                {menu.child && (
                                    <ul className={cx('menu-dropdown', `${menu.isShowSubmenu ? 'show-submenu' : ''}`)}>
                                        {menu.child.map((childMenu, index) => (
                                            <li key={index}>
                                                <Link to={childMenu.path}>
                                                    {childMenu.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )
                        )}
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
                                    <input type="search" placeholder="Tìm kiếm sản phẩm" spellCheck={false} />
                                </div>
                                <button><i className={cx("fa-solid fa-magnifying-glass")}></i></button>
                            </div>
                        </div>

                        <div className={cx("cart", "col l-2 m-0 c-0")}>
                            <div className={cx("cart-wrap")}>
                                <i className={cx("fa-solid fa-cart-shopping")}></i>
                                <div>
                                    <div className={cx('cart--no-product')}>
                                        <img src={images.emptyCart} alt="" />
                                        <span>Chưa Có Sản Phẩm</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('hamburger-open', 'col l-0 m-o-1 m-1 c-o-5 c-1')}>
                            <i className={cx('fa-solid fa-bars')} onClick={() => {
                                setIsShowHamburger(true);
                            }}></i>
                        </div>

                        <div style={{marginTop: 10}} className={cx("search", "col l-0 m-0 c-12")}>
                            <div className={cx("search-input-wrap")}>
                                <input type="search" placeholder="Tìm kiếm sản phẩm" spellCheck={false} />
                            </div>
                            <button><i className={cx("fa-solid fa-magnifying-glass")}></i></button>
                        </div>
                    </div>
                </div>

                {/* <div className={cx('menu-wrapper')}>
                    <div className={cx('menu')}>
                        <ul>
                            {menus?.map((menu, index) => (
                                <li key={index} className={index === 0 ? cx("active") : ""}>
                                    <Link to={menu?.path}>{menu?.name}</Link>
                                    {menu.child && (
                                        <ul className={cx('menu-dropdown')}>
                                            {menu.child.map((childItem, index) => (
                                                <li key={index}>
                                                    <Link to={childItem?.path}>{childItem?.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={cx('phone')}>
                        <i className={cx('fa-solid fa-phone-volume')}></i>
                        <div>
                            <h3>Hotline</h3>
                            <span>0123 456 789</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </header>);
}

export default Header;