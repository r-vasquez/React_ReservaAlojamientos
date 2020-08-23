import Filters from './components/Filters';
import TopBar from './components/TopBar';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div className='container'>
      <TopBar />
      <Filters />
      <CardContainer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
