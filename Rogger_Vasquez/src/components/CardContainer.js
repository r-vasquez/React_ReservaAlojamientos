import { hotelsData } from '../../scripts/data.js';
import Card from './Card.js';

class CardContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    let hotelesCard = hotelsData
      .filter(hotel => {
        if (this.props.iniDate && this.props.finalDate) {
          return (
            parseInt(this.props.iniDate) >= parseInt(hotel.availabilityFrom) &&
            parseInt(this.props.finalDate) <= parseInt(hotel.availabilityTo)
          );
        } else {
          return true;
        }
      })
      .filter(hotel => {
        if (this.props.country) {
          return hotel.country === this.props.country;
        } else {
          return true;
        }
      })
      .filter(hotel => {
        if (this.props.price) {
          return hotel.price === parseInt(this.props.price);
        } else {
          return true;
        }
      })
      .filter(hotel => {
        switch (parseInt(this.props.roomSize)) {
          case 1:
            return hotel.rooms <= 10;
          case 2:
            return hotel.rooms > 10 && hotel.rooms <= 20;
          case 3:
            return hotel.rooms > 20;
          default:
            return true;
        }
      })
      .map(hotel => {
        // map content to Card elements
        return <Card {...hotel} key={hotel.slug} />;
      })
      .reduce((acc, element, index) => {
        // create element groups with size 3, result looks like:
        // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
        if (index % 3 === 0) {
          acc.push([]);
        }
        acc[acc.length - 1].push(element);
        return acc;
      }, [])
      .map((rowContent, index) => {
        // surround every group with 'row'
        return <div className='row' key={index}>{rowContent}</div>;
      });

      let alertEmpty = 
      <div className="col s12 m5">
        <div className="card-panel purple lighten-5">
          <span>¡Lo Sentimos! No hay ningún hotel para la fecha que está buscando</span>
        </div>
      </div>

    return <div className='row'>{hotelesCard.length === 0 ? alertEmpty : hotelesCard}</div>;
  }
}
export default CardContainer;
