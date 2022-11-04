
import { ApiProvider } from './context/ApiProvider';
import { AppRoutes } from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './redux/store';


export const App = () => {

  return (
    <Provider store={store}>
      <ApiProvider>
        <AppRoutes />
      </ApiProvider>
    </Provider>
  )
}

export default App;