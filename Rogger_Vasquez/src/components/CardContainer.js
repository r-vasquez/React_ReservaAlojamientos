import { hotelsData } from '../../scripts/data.js';
import Card from './Card.js';

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

class CardContainer extends React.Component {
  render() {
    let hotelesCard = hotelsData
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
