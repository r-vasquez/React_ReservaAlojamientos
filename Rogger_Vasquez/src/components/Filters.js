class Filters extends React.Component {
  componentDidMount() {
    var selectElem = document.querySelectorAll('select');
    var instances = M.FormSelect.init(selectElem);

    var pickerElem = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(pickerElem);
  }

  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='input-field col l6'>
            <i className='material-icons prefix'>arrow_forward</i>

            <input type='text' className='datepicker' name='Entrada' placeholder='Fecha Entrada' />
          </div>
          <div className='input-field col l6'>
            <i className='material-icons prefix'>arrow_back</i>
            <input type='text' className='datepicker' name='Salida' placeholder='Fecha Salida' />
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
