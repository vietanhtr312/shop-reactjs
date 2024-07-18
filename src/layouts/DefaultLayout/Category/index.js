import styles from './Category.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


function Category() {
    return (  
    <nav className={cx('category')}>
        <h3 class="category__heading">
            <i class="category__heading-icon fa-solid fa-list"></i>
            Tất Cả Danh Mục</h3>

        <ul class="category-list">
            <li class="category-item category-item--main">
                <a href="" class="category-item__link">Nhà Sách Online</a>
            </li>
            <li class="category-item category-item--active">
                <a href="" class="category-item__link">Sách Tiếng Việt</a>
            </li>
            <li class="category-item">
                <a href="" class="category-item__link">Sách ngoại văn</a>
            </li>
            <li class="category-item">
                <a href="" class="category-item__link">Dụng cụ học sinh</a>
            </li>
            <li class="category-item">
                <a href="" class="category-item__link">Sổ và Giấy Các Loại</a>
            </li>
        </ul>
    </nav>);
}

export default Category;