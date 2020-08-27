import 'App.css';
import MainPage from './components/MainPage';

function App() {
  // Using a single MainPage component for further expansion of the App. (Routing)
  return <MainPage />;
}

ReactDOM.render(<App />, document.getElementById('app'));
