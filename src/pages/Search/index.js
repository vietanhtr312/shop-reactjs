import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { STATUS } from "../../utils/status";
import ProductList from "../../components/ProductList";
import { fetchAsyncSearchProducts, clearSearch, getSearchProducts, getSearchProductsStatus } from "../../store/searchSlice";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Search = () => {
    const dispatch = useDispatch(clearSearch);
    const { searchTerm } = useParams();
    const searchProducts = useSelector(getSearchProducts);
    const searchProductsStatus = useSelector(getSearchProductsStatus);

    useEffect(() => {
        dispatch(fetchAsyncSearchProducts(searchTerm));
    }, [searchTerm, dispatch]);

    if (searchProducts.length === 0) {
        return <div className={cx('search-noresult')}>
            <h3>Không tìm thấy kết quả tìm kiếm</h3>
        </div>;
    }

    return (
        <div className={cx('search-products')}>
            <div className={cx('grid wide')}>

                <div>
                    <div className={cx('search-products-content')}>
                        <h3>Kết quả tìm kiếm</h3>
                    </div>

                    {searchProductsStatus === STATUS.LOADING ? <div className={cx('loading')}>Loading...</div> :
                        <div className={cx("search-products-list")}>
                            <ProductList data={searchProducts} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
    }

    export default Search;