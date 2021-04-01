import './index.scss';
import DisplayCounter from './components/DisplayCounter';
import { Provider } from 'react-redux'
import store from './redux/store/store'

function App() {
  return (
    <Provider store={store}>
      <DisplayCounter />
    </Provider>
  );
}

export default App;
