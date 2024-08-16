import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images/hero';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('content grid wide')}>
                <div className={cx("row")}>
                    <div className={cx("col l-2-4 m-4 c-7")}>
                        <h3 className={cx('heading')}>Chăm sóc khách hàng</h3>
                        <ul className={cx("list")}>
                            <li className={cx("item")}>
                                <Link href="#" className={cx('item-link')}>Trung tâm trợ giúp</Link>
                                <a href="#" className={cx("item-link")}>Mall</a>
                                <a href="#" className={cx("item-link")}>Hướng dẫn mua hàng</a>
                                <a href="#" className={cx("item-link")}>Thanh Toán</a>
                                <a href="#" className={cx("item-link")}>Shopee Xu</a>
                                <a href="#" className={cx("item-link")}>Vận Chuyển</a>
                                <a href="#" className={cx("item-link")}>Trả Hàng & Hoàn Tiền</a>
                                <a href="#" className={cx("item-link")}>Chăm Sóc Khách Hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx("col l-2-4 m-4 c-5")}>
                        <h3 className={cx('heading')}>Giới thiệu</h3>
                        <ul className={cx("list")}>
                            <li className={cx("item")}>
                                <a href="#" className={cx("item-link")}>Giới thiệu</a>
                            </li>
                            <li>
                                <a href="#" className={cx("item-link")}>Tuyển dụng</a>
                            </li>
                            <li>
                                <a href="#" className={cx("item-link")}>Điều khoản</a>
                            </li>
                            <li>
                                <a href="#" className={cx("item-link")}>Chính Sách Bảo Mật</a>
                            </li>
                            <li>
                                <a href="#" className={cx("item-link")}>Chính Hãng</a>
                            </li>
                            <li>
                                <a href="#" className={cx("item-link")}>Kênh Người Bán</a>
                            </li>
                        </ul>
                    </div>

                    <div className={cx("col l-2-4 m-4 c-7")}>
                        <h3 className={cx('heading')}>Danh mục</h3>
                        <ul className={cx('list')}>
                            <li className={cx('list-item')}>
                                <a href="#" className={cx("item-link")}>Sách Tiếng Việt</a>
                            </li>
                            <li>
                                <a href="#" className={cx("item-link")}>Sách ngoại văn</a>
                            </li>
                            <li>
                                <a href="#" className={cx("item-link")}>Dụng cụ học sinh</a>
                            </li>
                            <li>
                                <a href="#" className={cx("item-link")}>Sổ và Giấy Các Loại</a>
                            </li>
                        </ul>
                    </div>

                    <div className={cx("col l-2-4 m-4 c-5")}>
                        <h3 className={cx('heading')}>Theo dõi</h3>
                        <ul className={cx('list')}>
                            <li className={cx('item')}>
                                <a href="#" className={cx("item-link")}>
                                    <i className={cx("item-icon fa-brands fa-instagram")}></i>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className={cx("item-link")}>
                                    <i className={cx("item-icon fa-brands fa-facebook")}></i>
                                    Facebook</a>
                            </li>
                            <li>
                                <a href="#" className={cx("item-link")}>
                                    <i className={cx("item-icon fa-brands fa-linkedin")}></i>
                                    Linked
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={cx("col l-2-4 m-8 c-12")}>
                        <h3 className={cx("heading")}>Vào cửa hàng trên ứng dụng</h3>
                        <div className={cx("download")}>
                            <img src={images.qrCode} alt="Download QR" className={cx("download-qr")} />
                            <div className={cx("download-apps")}>
                                <a href="#" className={cx('download-app-link')} >
                                    <img src={images.ggPlay} alt="GGPlay" className={cx('download-app-img')} />
                                </a>
                                <a href="#" className={cx('download-app-link')}>
                                    <img src={images.appStore} alt="AppStore" className={cx('download-app-img')} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('bottom')} >
                <div className={cx('grid wide')}>
                    <div className={cx('policy')}>
                        <a href="" className={cx('policy-item')}>CHÍNH SÁCH BẢO MẬT</a>
                        <a href="" className={cx('policy-item')}>QUY CHẾ HOẠT ĐỘNG</a>
                        <a href="" className={cx('policy-item')}>CHÍNH SÁCH VẬN CHUYỂN</a>
                        <a href="" className={cx('policy-item')}>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</a>
                    </div>

                    <p className={cx('text')}>
                        Địa chỉ: 22 Đường Tôn Thất Tùng, phường Khương Thượng, Quận Đống Đa, Thành phố Hà Nội, Việt Nam. <br/>
                    </p>
                    <p className={cx('text')}> Chịu Trách Nhiệm Quản Lý Nội Dung: Trịnh Việt Anh - Điện thoại liên hệ: 0355820096 </p>
                    <p className={cx('text')}>

                        Copyright © 2024 Bản quyền thuộc về Book shop312</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;