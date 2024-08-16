import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images/hero';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);


function Category() {
    const [isShowCategory, setIsShowCategory] = useState(true);

    return (
        <div className={cx('category-wrapper')}>
            <div className='grid wide'>
                <div className='row'>
                    <div className='col l-2'>
                        <nav className={cx('category')}>
                            <h3 onClick={() => { setIsShowCategory(!isShowCategory) }}>
                                <i className='fa-solid fa-list'></i>
                                Tất Cả Danh Mục</h3>
                
                                <ul className={isShowCategory ? cx('') : cx('hidden')}>
                                    <li className={cx('main')}>
                                        <Link href="">Nhà Sách Online</Link>
                                    </li>
                                    <li className={cx('active')}>
                                        <Link to="">Sách Tiếng Việt</Link>
                                    </li>
                                    <li>
                                        <Link to="">Sách ngoại văn</Link>
                                    </li>
                                    <li>
                                        <Link to="">Dụng cụ học sinh</Link>
                                    </li>
                                    <li>
                                        <Link to="">Sổ và Giấy Các Loại</Link>
                                    </li>
                                </ul>
                        </nav>
                    </div>
                    <div className='col l-10'>
                        <div className={cx('banner')}>
                            <div className={cx('banner-text')}>
                                <span>Sách trong nước và nước ngoài</span>
                                <h2>Sách chính hãng 100%</h2>
                                <p>Miễn phí giao hàng trên toàn quốc</p>
                                <Link to className='btn btn--primary'>Mua ngay</Link>
                            </div>
                            <img src={images.banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Category;