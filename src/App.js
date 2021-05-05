import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

import {increment,decrement} from './redux/actions/counter';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>point increment and decrement aplication using redux</p>
        <button onClick={() => dispatch(increment())}>Plus one</button>
        <button onClick={() => dispatch(decrement())}>Minus one</button>
        nilai saat ini: {counter.value}
      </header>
    </div>
  );
}

export default App;