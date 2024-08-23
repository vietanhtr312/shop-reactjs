import { memo } from 'react';
import styles from './BreadCrumb.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ROUTERS } from '../../../utils/router';

const cx = classNames.bind(styles);

function BreadCrumb(props) {
    return (
        <div className={cx("breadcrumb")}>
            <div className={cx('breadcrumb-text')}>
                <h2>Shoppy</h2>
                <div className={cx('breadcrumb-list')}>
                    <ul>
                        <li className={cx('link')}>
                            <Link to={ROUTERS.USER.HOME}>Trang chủ</Link>
                        </li>
                        <li>
                            {props.name}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default memo(BreadCrumb);