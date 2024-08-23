import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ROUTERS } from '../../../utils/router';
import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images/banner';

const cx = classNames.bind(styles);

export const categories = [
    "Sách Văn học",
    "Sách Tâm lý",
    "Sách Kinh tế",
    "Sách Ngoại ngữ'",
]

function Category() {
    const location = useLocation();
    const [isHome, setIsHome] = useState(location.pathname.length <= 1);
    const [isShowCategory, setIsShowCategory] = useState(isHome);



    useEffect(() => {
        const isHome = location.pathname.length <= 1;
        setIsHome(isHome);
        setIsShowCategory(isHome);
    }, [location])

    return (
        <div>
            { isHome && (
                <div className={cx('category-wrapper')}>
                    <div className='grid wide'>
                        <div className='row'>
                            <div className='col l-2 m-12 c-12'>
                                <nav className={cx('category')}>
                                    <h3 onClick={() => { setIsShowCategory(!isShowCategory) }}>
                                        <i className='fa-solid fa-list'></i>
                                        Tất Cả Danh Mục</h3>
        
                                    <ul className={isShowCategory ? cx('') : cx('hidden')}>
                                        <li className={cx('main')}>
                                            <Link href="">Nhà Sách Online</Link>
                                        </li>
                                        {categories.map((category, index) => (
                                            <li key={index}>
                                                <Link to={ROUTERS.USER.PRODUCTS}>{category}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className='col l-10 m-12 c-12'>
                                <div className={cx('banner')} style={{ backgroundImage: `url(${images.banner})` }}>
                                    <div className={cx('banner-text')}>
                                        <span>Sách trong nước và nước ngoài</span>
                                        <h2>Sách chính hãng 100%</h2>
                                        <p>Miễn phí giao hàng trên toàn quốc</p>
                                        <Link to className='btn btn--primary'>Mua ngay</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Category;