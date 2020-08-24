class TopBar extends React.Component {
  render() {
    let iniDate = 'martes, 31 de marzo de 2020';
    let finalDate = 'miércoles, 1 de abril de 2020';
    return (
      <React.Fragment>
        <nav>
          <div className='nav-wrapper deep-purple accent-1'>
            <div className='container'>
              <a href='#' className='brand-logo'>
                <i class='material-icons'>loyalty</i>
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
          <h5>
            Desde el {iniDate} hasta el {finalDate}{' '}
          </h5>
          <div className='divider'></div>
        </div>
      </React.Fragment>
    );
  }
}
export default TopBar;
