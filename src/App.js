import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store/store';
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import { Home, CategoryProduct, Cart, Products, ProductDetail, Search, Login } from './pages';
import { ROUTERS } from './utils/router';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
  
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }
  
    fetch('http://localhost:3080/verify', {
      method: 'POST',
      headers: {
        'jwt-token': user.token,
      },
    })
      .then((r) => r.json())
      .then((r) => {
        setLoggedIn('success' === r.message)
        setEmail(user.email || '')
      })
  }, [])

  const userRouters = [
    {
        path: ROUTERS.USER.HOME,
        component: <Home />,
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
    <div>
      <Provider store={store}>
        <BrowserRouter>
        <DefaultLayout email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
                 <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
            </Routes>
        </DefaultLayout>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;
