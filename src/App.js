import logo from './logo.svg';
import './App.css';
import { DelayedContentComponent } from './componment/useInterval'
import TestComponent from './componment/usePreviousValue';

function App() {
  return (
    <div className="App">
      <DelayedContentComponent />
      <TestComponent />
    </div>
  );
}

export default App;
