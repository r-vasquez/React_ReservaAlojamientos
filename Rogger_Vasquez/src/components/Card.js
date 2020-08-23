class Card extends React.Component {
  // {
  //   slug: 'la-bamba-de-areco',
  //   name: 'La Bamba de Areco',
  //   photo: './images/la-bamba-de-areco.jpg',
  //   description:
  //     'La Bamba de Areco está ubicada en San Antonio de Areco, en el corazón de la pampa. Es una de las estancias más antiguas de la Argentina, recientemente restaurada para ofrecer a sus huéspedes todo el confort y esplendor colonial.',
  //   availabilityFrom: today.valueOf(),
  //   availabilityTo: today.valueOf() + 864000000, // 10 days
  //   rooms: 11,
  //   city: 'Buenos Aires',
  //   country: 'Argentina',
  //   price: 4
  // }

  render() {
    return (
      <div className='col s4'>
        <div className='card hoverable'>
          <div className='card-image'>
            <img className='responsive-img' src={this.props.photo} alt='' />
          </div>
          <div className='card-content'>
            <span className='card-title'>{this.props.name}</span>
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
