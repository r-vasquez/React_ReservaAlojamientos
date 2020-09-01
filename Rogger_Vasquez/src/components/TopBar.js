class TopBar extends React.Component {
  render() {
    const isDateIn = this.props.iniDate && this.props.finalDate;

    const subtitle = isDateIn
      ? `Desde el ${this.props.iniDate} hasta el ${this.props.finalDate}`
      : `Por favor seleccione fechas`;

    return (
      <React.Fragment>
        <nav>
          <div className='nav-wrapper deep-purple accent-1'>
            <div className='container'>
              <a href='#' className='brand-logo'>
                <i className='material-icons'>loyalty</i>
                Hoteles R-Vasquez
              </a>
              <ul className='right'>
                <li>
                  <a href='https://github.com/r-vasquez/React_ReservaAlojamientos' target='_blank'>
                    GitHub!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='container'>
          <h5>{subtitle}</h5>
          <div className='divider'></div>
        </div>
      </React.Fragment>
    );
  }
}
export default TopBar;
