import { Navigate, useRoutes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import CompactHeader from './layouts/CompactHeader';
import { Home, CategoryProduct, Cart, Products, ProductDetail, Search, Login, Payment } from './pages';

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

  const routes = useRoutes([
    {
      path: "/",
      element: <DefaultLayout setLoggedIn={setLoggedIn} email={email} loggedIn={loggedIn} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/product/:id",
          element: <ProductDetail />,
        },
        {
          path: "products/category/:category",
          element: <CategoryProduct />,
        },
        {
          path: "search/:searchTerm",
          element: <Search />,
        }
      ],
    },
    {
      path: "/",
      element: <CompactHeader setLoggedIn={setLoggedIn} email={email} loggedIn={loggedIn} />,
      children: [
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "payment",
          element: <Payment />,
        }
      ],
    },
    {
      path: "/login",
      element: <Login email={email} setLoggedIn={setLoggedIn} setEmail={setEmail}/>,
    }
  ]);
  return routes;
}

export default App;
