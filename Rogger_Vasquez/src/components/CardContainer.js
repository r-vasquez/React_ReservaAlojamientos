import { hotelsData } from '../../scripts/data.js';
import Card from './Card.js';

// pequeno: hasta 10
// medio: hasta 20

class CardContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    let hotelesCard = hotelsData
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
        return <Card {...hotel} />;
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
      .map(rowContent => {
        // surround every group with 'row'
        return <div className='row'>{rowContent}</div>;
      });

    return <div className='row'>{hotelesCard}</div>;
  }
}
export default CardContainer;
