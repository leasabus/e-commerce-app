
import { ApiProvider } from './context/ApiProvider';
import { AppRoutes } from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTotals } from './redux/cartSlice';


export const App = () => {
  store.dispatch(getTotals());
  return (

    <Provider store={store}>
      <ApiProvider>
        <ToastContainer />
        <AppRoutes />
      </ApiProvider>
    </Provider>
  )
}

export default App;