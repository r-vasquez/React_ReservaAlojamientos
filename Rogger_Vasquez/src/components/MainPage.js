import Filters from './Filters';
import TopBar from './TopBar';
import CardContainer from './CardContainer';
import { parseDate } from '../../scripts/dateLib';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      iniDate: '',
      finalDate: '',
      country: '',
      price: '',
      size: ''
    };

    this.handleIniDate = this.handleIniDate.bind(this);
    this.handleFinalDate = this.handleFinalDate.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSize = this.handleSize.bind(this);
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

  handleCountry(countryIn) {
    this.setState({
      country: countryIn
    });
  }

  handlePrice(priceIn) {
    this.setState({
      price: priceIn
    });
  }

  handleSize(sizeIn) {
    this.setState({
      size: sizeIn
    });
  }

  render() {
    return (
      <React.Fragment>
        <TopBar iniDate={this.state.iniDate} finalDate={this.state.finalDate} />
        <div className='container'>
          <Filters
            handleIniDate={this.handleIniDate}
            handleFinalDate={this.handleFinalDate}
            handleCountry={this.handleCountry}
            handlePrice={this.handlePrice}
            handleSize={this.handleSize}
          />
          <CardContainer
            country={this.state.country}
            price={this.state.price}
            roomSize={this.state.size}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default MainPage;
