class TopBar extends React.Component {
  render() {
    let iniDate = 'martes, 31 de marzo de 2020';
    let finalDate = 'miércoles, 1 de abril de 2020';
    return (
      <React.Fragment>
        <h2>Hoteles</h2>
        <h5>
          desde el {iniDate} hasta el {finalDate}{' '}
        </h5>
      </React.Fragment>
    );
  }
}
export default TopBar;
