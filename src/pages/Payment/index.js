import styles from './Payment.module.scss';
import classNames from 'classnames/bind';
import Header from '../../layouts/CompactHeader/Header';
import imgs from '../../assets/images/payment/index';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Payment() {
    const [payment, setPayment] = useState("Onepay");
    const handlePayment = (payment) => {
        setPayment(payment);
    }
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [nameError, setNameError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [addressError, setAddressError] = useState('')
    const handleForm = () => {
        setNameError('')
        setPhoneError('')
        setAddressError('')

        if ('' === name) {
            setNameError('Please enter your name')
            return
        }

        if ('' === phone) {
            setPhoneError('Please enter your phone number')
            return
        }

        if (!/^\d{10,11}$/.test(phone)) {
            setPhoneError('Please enter a valid phone number')
            return
        }

        if ('' === address) {
            setAddressError('Please enter your address')
            return
        }
    }

    return (
        <div>
            <Header name={'Thanh toán'} />
            <div className={cx('wrapper')}>
                <div className={cx('grid wide')}>
                    <div className={cx('container')}>
                        <div className={cx('content', 'row')}>
                            <div className="col l-7 m-12 c-12">
                                <div className={cx('content-left')}>
                                    <div className={cx('method_delivery')}>
                                        <h3>Phương thức giao hàng</h3>
                                        <input checked type="radio" />
                                        <label>Giao hàng chuyển phát nhanh</label>
                                        <span>Chuyển hàng tới địa chỉ khách hàng</span>
                                    </div>
                                    <form className={cx('method_payment')}>
                                        <h3>Phương thức thanh toán</h3>
                                        <span>Mọi giao dịch đều được bảo mật và mã hóa. Thông tin thẻ tín dụng sẽ không bao giờ được lưu lại.</span>
                                        <div className={cx('method_payment-item')}>
                                            <input name="method_payment" type="radio" id="method_payment_1" value="Onepay"
                                                onChange={() => handlePayment("Onepay")} checked={payment === "Onepay"} />
                                            <label for="method_payment_1">Thanh toán bằng thẻ tín dụng (OnePay)</label>
                                            <img src={imgs.onepay} alt="payment-img" />
                                        </div>
                                        <div className={cx('method_payment-item')}>
                                            <input name="method_payment" type="radio" id="method_payment_2" value="ATM"
                                                onChange={() => handlePayment("ATM")} checked={payment === "ATM"} />
                                            <label for="method_payment_2">Thanh toán bằng thẻ ATM(OnePay)</label>
                                            <img src={imgs.atm} alt="payment-img" />
                                            <span>Hỗ trợ thanh toán online hơn 38 ngân hàng phổ biến Việt Nam</span>
                                        </div>
                                        <div className={cx('method_payment-item')}>
                                            <input name="method_payment" type="radio" id="method_payment_3" value="Momo"
                                                onChange={() => handlePayment("Momo")} checked={payment === "Momo"} />
                                            <label for="method_payment_3">Thanh toán Momo</label>
                                            <img src={imgs.momo} alt="payment-img" />
                                        </div>
                                        <div className={cx('method_payment-item')}>
                                            <input name="method_payment" type="radio" id="method_payment_4" value="cash"
                                                onChange={() => handlePayment("cash")} checked={payment === "cash"} />
                                            <label for="method_payment_4">Thu tiền tận nơi</label>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col l-5 m-12 c-12">
                                <div className={cx('content-right')}>
                                    <div className={cx("delivery")}>
                                        <h4>Vui lòng chọn địa chỉ giao hàng</h4>

                                        <div className={cx("delivery-input", "row")}>
                                            <div className={cx("col l-6 m-6 c-6")}>
                                                <div className={cx("delivery-input_item")}>
                                                    <label for="">Họ tên<span style={{ color: "red" }}>*</span></label>
                                                    <input type="text" onBlur={() => handleForm()} value={name} onChange={(e) => setName(e.target.value)} />
                                                    <label className={cx("errorLabel")}>{nameError}</label>
                                                </div>
                                            </div>
                                            <div className={cx("col l-6 m-6 c-6")}>
                                                <div className={cx("delivery-input_item")}>
                                                    <label for="">Điện thoại<span style={{ color: "red" }}>*</span></label>
                                                    <input type="tel" onBlur={() => handleForm()} value={phone} onChange={(e) => setPhone(e.target.value)} />
                                                    <label className={cx("errorLabel")}>{phoneError}</label>
                                                </div>
                                            </div>
                                            <div className={cx("col l-6 m-6 c-6")}>
                                                <div className={cx("delivery-input_item")}>
                                                    <label for="">Tỉnh/Tp<span style={{ color: "red" }}>*</span></label>
                                                    <input list="province" />
                                                    <datalist id="province">
                                                        <option value="Hà Nội" />
                                                        <option value="Hồ Chí Minh" />
                                                        <option value="Đà Nẵng" />
                                                        <option value="Hải Phòng" />
                                                        <option value="Cần Thơ" />
                                                    </datalist>
                                                </div>
                                            </div>
                                            <div className={cx("col l-6 m-6 c-6")}>
                                                <div className={cx("delivery-input_item")}>
                                                    <label for="">Quận/Huyện<span style={{ color: "red" }}>*</span></label>
                                                    <input list="district" />
                                                    <datalist id="district">
                                                        <option value="Quận 1" />
                                                        <option value="Quận 2" />
                                                        <option value="Quận 3" />
                                                        <option value="Quận 4" />
                                                        <option value="Quận 5" />
                                                    </datalist>
                                                </div>
                                            </div>
                                            <div className={cx("col l-6 m-6 c-6")}>
                                                <div className={cx("delivery-input_item")}>
                                                    <label for="">Địa chỉ<span style={{ color: "red" }}>*</span></label>
                                                    <input type="text" onBlur={() => handleForm()} value={address} onChange={(e) => setAddress(e.target.value)} />
                                                    <label className={cx("errorLabel")}>{addressError}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('content-bottom')}>
                                <div className={cx('return')}>
                                    <Link to="/cart"><span>&#171;</span> Quay lại</Link>
                                </div>
                                <div className={cx('button')}>
                                    <button onclick="window.location = './'">HOÀN TẤT THANH TOÁN</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Payment;