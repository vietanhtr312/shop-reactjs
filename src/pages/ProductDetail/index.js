import React, { useEffect, useState } from "react";
import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchAsyncGetProductById } from "../../store/productSlice";
import { STATUS } from "../../utils/status";


import BreadCrumb from "../../layouts/components/BreadCrumb";
import prodImg from "../../assets/images/product";


const cx = classNames.bind(styles);

const ProductDetail = () => {
    const imgs = [prodImg.prod1, prodImg.prod2, prodImg.prod3];
    const { id } = useParams();
    console.log(id);




    return (
        <div>
            <BreadCrumb name="Chi tiết sản phẩm" />
            <div className={cx('wrapper')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-6')}>
                            <div className={cx('product-detail-pic')}>
                                <div className={cx('img')}><img src={prodImg.prod2} alt="product" /></div>
                                <div className={cx('main')}>
                                    {imgs.map((img, index) => (
                                        <img key={index} src={img} alt="product-pic" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={cx('col l-6', 'product-detail-text')}>
                            <h2>Sách Cây Cam Ngọt</h2>
                            <div className={cx('seen-icon')}>
                                <i className="fas fa-eye"></i>
                                {` 10 (Lượt xem)`}
                            </div>
                            <h3>Giá: 100.000đ</h3>
                            <p>Cuốn Sách Bạn Cải Thiện Suy Nghĩ Giúp Bạn Sống Chủ Động, Tích Cực Và Thành Công</p>
                            <ul>
                                <li>
                                    <b>Tình trạng: </b><span>Còn hàng</span>
                                </li>
                                <li>
                                    <b>Số lượng: </b><span>20</span>
                                </li>
                                <li>
                                    <b>Chia sẻ: </b><span>
                                        <i className="fab fa-facebook"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-google-plus"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;