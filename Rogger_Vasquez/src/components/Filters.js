class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      iniDate: '',
      finalDate: ''
    };

    this.handleIniDate = this.handleIniDate.bind(this);
    this.handleFinalDate = this.handleFinalDate.bind(this);
  }

  componentDidMount() {
    // Initiating Materialize CSS components.
    let selectElem = document.querySelectorAll('select');
    let instances = M.FormSelect.init(selectElem);
    let context = this;

    let iniPickerElem = document.querySelectorAll('.datepickerIni');
    M.Datepicker.init(iniPickerElem, {
      defaultDate: new Date(),
      onSelect: function (date) {
        let dateObj = new Date(date);
        let dateSec = dateObj.getTime();
        context.handleIniDate(dateSec);
      }
    });

    let finalPickerElem = document.querySelectorAll('.datepickerFinal');
    M.Datepicker.init(finalPickerElem, {
      onSelect: function (date) {
        let dateObj = new Date(date);
        let dateSec = dateObj.getTime();
        context.handleFinalDate(dateSec);
      }
    });
  }

  handleIniDate(iniDate) {
    this.props.handleIniDate(iniDate);
    let fecha = new Date(iniDate);
    console.log(fecha);
  }

  handleFinalDate(finalDate) {
    this.props.handleFinalDate(finalDate);
    let fecha = new Date(finalDate);
    console.log(fecha);
  }

  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='input-field col l6'>
            <i className='material-icons prefix'>arrow_forward</i>
            <input type='text' className='datepicker datepickerIni' placeholder='Fecha Entrada' />
          </div>
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

        <div className='row'>
          <div className='input-field col l4 offset-s1'>
            <i className='material-icons prefix'>public</i>
            <select name='country'>
              <option value='' disabled selected>
                Todos los países
              </option>
              <option value='Argentina'>Argentina</option>
              <option value='Brasil'>Brasil</option>
              <option value='Chile'>Chile</option>
              <option value='Uruguay'>Uruguay</option>
            </select>
          </div>

          <div className='input-field col l4'>
            <i className='material-icons prefix'>attach_money</i>
            <select name='price'>
              <option value='' disabled selected>
                Cualquier precio
              </option>
              <option value='1'>$</option>
              <option value='2'>$$</option>
              <option value='3'>$$$</option>
              <option value='4'>$$$$</option>
            </select>
          </div>

          <div className='input-field col l4'>
            <i className='material-icons prefix'>local_hotel</i>
            <select name='roomSize'>
              <option value='' disabled selected>
                Cualquier tamaño
              </option>
              <option value='s'>Hotel pequeño</option>
              <option value='m'>Hotel mediano</option>
              <option value='l'>Hotel grande</option>
            </select>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Filters;
