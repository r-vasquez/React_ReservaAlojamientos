import Filters from './Filters';
import TopBar from './TopBar';
import CardContainer from './CardContainer';
import { parseDate } from '../../scripts/dateLib';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      parsedIniDate: '',
      parsedFinalDate: '',
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
      parsedIniDate: parseDate(inidate),
      iniDate: inidate.getTime()
    });
  }
  handleFinalDate(finaldate) {
    this.setState({
      parsedFinalDate: parseDate(finaldate),
      finalDate: finaldate.getTime()
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
    const { country, price, size, iniDate, finalDate } = this.state;
    return (
      <React.Fragment>
        <TopBar iniDate={this.state.parsedIniDate} finalDate={this.state.parsedFinalDate} />
        <div className='container'>
          <Filters
            handleIniDate={this.handleIniDate}
            handleFinalDate={this.handleFinalDate}
            handleCountry={this.handleCountry}
            handlePrice={this.handlePrice}
            handleSize={this.handleSize}
          />
          <CardContainer
            country={country}
            price={price}
            roomSize={size}
            iniDate={iniDate}
            finalDate={finalDate}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default MainPage;
