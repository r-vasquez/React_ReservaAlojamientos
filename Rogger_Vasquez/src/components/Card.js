class Card extends React.Component {

  render() {
    return (
      <div className='col s4'>
        <div className='card hoverable'>
          <div className='card-image'>
            <img className='responsive-img' src={this.props.photo} alt='' />
          </div>
          <div className='card-content'>
            <span className='card-title'>{this.props.name}</span>
            <p>{this.props.description}</p>
            {/* TODO: Cambiar estos estilos */}
            <br></br>
            <p>
              <strong>Pais :</strong> {this.props.country}
            </p>
            <p>
              <strong>Precio :</strong> {'$'.repeat(this.props.price)}
            </p>
            <p>
              <strong>Tamaño :</strong> {this.props.rooms} cuartos
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
