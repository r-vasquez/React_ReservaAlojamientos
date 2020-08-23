class Filters extends React.Component {
  render() {
    return (
      <div className='form-group'>
        <input type='date' className='' name='Entrada' />

        <input type='date' className='' name='Salida' />

        <select name='country'>
          <option value='Argentina'>Argentina</option>
          <option value='Brasil'>Brasil</option>
          <option value='Chile'>Chile</option>
          <option value='Uruguay'>Uruguay</option>
        </select>

        <select name='price'>
          <option value='1'>$</option>
          <option value='2'>$$</option>
          <option value='3'>$$$</option>
          <option value='4'>$$$$</option>
        </select>

        <select name='roomSize'>
          <option value='s'>Hotel pequeño</option>
          <option value='m'>Hotel mediano</option>
          <option value='l'>Hotel grande</option>
        </select>
      </div>
    );
  }
}
export default Filters;
