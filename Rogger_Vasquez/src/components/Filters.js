class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      country: '',
      price: '',
      size: '',
      minDate: new Date()
    };

    this.handleIniDate = this.handleIniDate.bind(this);
    this.handleFinalDate = this.handleFinalDate.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSize = this.handleSize.bind(this);
  }

  componentDidMount() {
    // Materialize needed initializations
    let selectElem = document.querySelectorAll('select');
    let instances = M.FormSelect.init(selectElem);
    let context = this;

    let iniPickerElem = document.querySelectorAll('.datepickerIni');
    M.Datepicker.init(iniPickerElem, {
      defaultDate: new Date(),
      minDate: this.state.minDate,
      autoClose: true,
      onSelect: function (date) {
        let dateObj = new Date(date);
        context.handleIniDate(dateObj);
        context.setState({ minDate: dateObj });
      }
    });

    let finalPickerElem = document.querySelectorAll('.datepickerFinal');
    M.Datepicker.init(finalPickerElem, {
      defaultDate: new Date(),
      autoClose: true,
      minDate: this.state.minDate,
      onSelect: function (date) {
        let dateObj = new Date(date);
        context.handleFinalDate(dateObj);
      }
    });
  }

  componentDidUpdate() {
    // working date pickers co-dependently
    let context = this;
    M.Datepicker.init(document.querySelectorAll('.datepickerFinal'), {
      defaultDate: this.state.minDate,
      autoClose: true,
      minDate: this.state.minDate,
      onSelect: function (date) {
        let dateObj = new Date(date);
        context.handleFinalDate(dateObj);
      }
    });
  }

  handleIniDate(iniDate) {
    this.props.handleIniDate(iniDate);
  }

  handleFinalDate(finalDate) {
    this.props.handleFinalDate(finalDate);
  }

  handleCountry(event) {
    this.setState(
      {
        country: event.target.value
      },
      () => {
        this.props.handleCountry(this.state.country);
      }
    );
  }

  handlePrice(event) {
    this.setState(
      {
        price: event.target.value
      },
      () => {
        this.props.handlePrice(this.state.price);
      }
    );
  }

  handleSize(event) {
    this.setState(
      {
        size: event.target.value
      },
      () => {
        this.props.handleSize(this.state.size);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className='row'>
          {/* Initial Date Picker */}
          <div className='input-field col l6'>
            <i className='material-icons prefix'>arrow_forward</i>
            <input type='text' className='datepicker datepickerIni' placeholder='Fecha Entrada' />
          </div>
          {/* Final Date Picker */}
          <div className='input-field col l6'>
            <i className='material-icons prefix'>arrow_back</i>
            <input
              type='text'
              className='datepicker datepickerFinal'
              name='Salida'
              placeholder='Fecha Salida'
            />
          </div>
        </div>

        {/* Country Selection */}
        <div className='row'>
          <div className='input-field col l4 offset-s1'>
            <i className='material-icons prefix'>public</i>
            <select name='country' value={this.state.country} onChange={this.handleCountry}>
              <option value='' selected>
                Todos los países
              </option>
              <option value='Argentina'>Argentina</option>
              <option value='Brasil'>Brasil</option>
              <option value='Chile'>Chile</option>
              <option value='Uruguay'>Uruguay</option>
            </select>
          </div>

          {/* Price Selection */}
          <div className='input-field col l4'>
            <i className='material-icons prefix'>attach_money</i>
            <select name='price' value={this.state.price} onChange={this.handlePrice}>
              <option value='' selected>
                Cualquier precio
              </option>
              <option value='1'>$</option>
              <option value='2'>$$</option>
              <option value='3'>$$$</option>
              <option value='4'>$$$$</option>
            </select>
          </div>

          {/* Size Selection */}
          <div className='input-field col l4'>
            <i className='material-icons prefix'>local_hotel</i>
            <select name='roomSize' value={this.state.size} onChange={this.handleSize}>
              <option value='' selected>
                Cualquier tamaño
              </option>
              <option value='1'>Hotel pequeño</option>
              <option value='2'>Hotel mediano</option>
              <option value='3'>Hotel grande</option>
            </select>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Filters;
