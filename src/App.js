import { BrowserRouter } from 'react-router-dom'
import RouterCustom from './router';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <RouterCustom />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;
