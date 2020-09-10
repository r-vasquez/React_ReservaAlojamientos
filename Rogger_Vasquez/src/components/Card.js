class Card extends React.Component {
  render() {
    const { photo, name, description, country, price, rooms } = this.props;

    return (
      <div className='col s4'>
        <div className='card hoverable'>
          <div className='card-image'>
            <img className='responsive-img' src={photo} alt='' />
          </div>
          <div className='card-content'>
            <span className='card-title'>{name}</span>
            <p>{description}</p>
            {/* TODO: Cambiar estos estilos */}
            <br></br>
            <p>
              <strong>Pais :</strong> {country}
            </p>
            <p>
              <strong>Precio :</strong> {'$'.repeat(price)}
            </p>
            <p>
              <strong>Tamaño :</strong> {rooms} cuartos
            </p>
          </div>
          <div className='card-action'>
            <a href='#'>Reservar</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
