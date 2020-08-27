import Filters from './Filters';
import TopBar from './TopBar';
import CardContainer from './CardContainer';
import { parseDate } from '../../scripts/dateLib';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      iniDate: '',
      finalDate: ''
    };

    this.handleIniDate = this.handleIniDate.bind(this);
    this.handleFinalDate = this.handleFinalDate.bind(this);
  }

  handleIniDate(inidate) {
    this.setState({
      iniDate: parseDate(inidate)
    });
  }
  handleFinalDate(finaldate) {
    this.setState({
      finalDate: parseDate(finaldate)
    });
  }

  render() {
    return (
      <React.Fragment>
        <TopBar iniDate={this.state.iniDate} finalDate={this.state.finalDate} />
        <div className='container'>
          <Filters handleIniDate={this.handleIniDate} handleFinalDate={this.handleFinalDate} />
          <CardContainer />
        </div>
      </React.Fragment>
    );
  }
}
export default MainPage;
