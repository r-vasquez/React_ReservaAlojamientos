import Filters from './components/Filters';
import TopBar from './components/TopBar';
import CardContainer from './components/CardContainer';
import 'App.css';

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <div className='container'>
        <Filters />
        <CardContainer />
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
