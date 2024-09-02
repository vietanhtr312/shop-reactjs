import { Routes, Route } from 'react-router-dom';
import { ROUTERS } from './utils/router';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import CategoryProduct from './pages/CategoryProduct';
import Search from './pages/Search';


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
            component: <Products />,
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component: <ProductDetail />,
        },
        {
            path: ROUTERS.USER.CART,
            component: <Cart />,
        },
        {
            path: ROUTERS.USER.CATEGORYPRODUCT,
            component: <CategoryProduct />,
        },
        {
            path: ROUTERS.USER.SEARCH,
            component: <Search />,
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