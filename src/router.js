import { Routes, Route } from 'react-router-dom';
import { ROUTERS } from './utils/router';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';


const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <Home />,
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <Profile />,
        },
        {
            path: ROUTERS.USER.PRODUCTS,
            component: <Product />,
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component: <ProductDetail />,
        },
        {
            path: ROUTERS.USER.CART,
            component: <Cart />,
        }
    ];

    return (
        <DefaultLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </DefaultLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;