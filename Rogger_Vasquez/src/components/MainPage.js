import Filters from './Filters';
import TopBar from './TopBar';
import CardContainer from './CardContainer';

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
      iniDate: this.parseDate(inidate)
    });
  }
  handleFinalDate(finaldate) {
    this.setState({
      finalDate: this.parseDate(finaldate)
    });
  }

  //TODO : Move dates Scripts to external JS
  /*
  r-vasquez:
  Receives a Date Object and parse it to a string
  w/o using external libs.
  */
  parseDate(date) {
    let weekday = this.parseDay(date.getDay());
    let day = date.getDate();
    let month = this.parseMonth(date.getMonth());
    let year = date.getFullYear();
    return `${weekday} ${day} de ${month}, ${year}`;
  }

  parseDay(day) {
    switch (day) {
      case 0:
        return 'domingo';
        break;
      case 1:
        return 'lunes';
        break;
      case 2:
        return 'martes';
        break;
      case 3:
        return 'miercoles';
        break;
      case 4:
        return 'jueves';
        break;
      case 5:
        return 'viernes';
        break;
      case 6:
        return 'sábado';
        break;
      default:
        break;
    }
  }

  parseMonth(Month) {
    switch (Month) {
      case 0:
        return 'enero';
        break;
      case 1:
        return 'febrero';
        break;
      case 2:
        return 'marzo';
        break;
      case 3:
        return 'abril';
        break;
      case 4:
        return 'mayo';
        break;
      case 5:
        return 'junio';
        break;
      case 6:
        return 'julio';
        break;
      case 7:
        return 'agosto';
        break;
      case 8:
        return 'septiembre';
        break;
      case 9:
        return 'octubre';
        break;
      case 10:
        return 'noviembre';
        break;
      case 11:
        return 'diciembre';
        break;
      default:
        break;
    }
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
