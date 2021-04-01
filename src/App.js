import './index.scss';
import DisplayCounter from './components/DisplayCounter';
import { Provider } from 'react-redux'
import store from './redux/store/store'
import DisplayArticles from './components/DisplayArticles';

function App() {
  return (
    <Provider store={store}>
      <DisplayCounter />
      <DisplayArticles />
    </Provider>
  );
}

export default App;
